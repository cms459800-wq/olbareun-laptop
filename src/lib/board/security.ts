import 'server-only';
import {createHmac,randomBytes,scrypt,timingSafeEqual} from 'node:crypto';
import {promisify} from 'node:util';
import {cookies} from 'next/headers';
import {boardDb} from './db';

const derive=promisify(scrypt);
export class BoardError extends Error {constructor(message:string,public status=400){super(message);}}
function secret() {const s=process.env.BOARD_SECRET;if(!s||s.length<32)throw new Error('BOARD_SECRET_NOT_CONFIGURED');return s;}
export function digest(value:string){return createHmac('sha256',secret()).update(value).digest('hex');}
export async function hashPassword(password:string){const salt=randomBytes(16).toString('hex');const key=await derive(password,salt,64) as Buffer;return `${salt}:${key.toString('hex')}`;}
export async function checkPassword(password:string,hash:string){const [salt,encoded]=hash.split(':');if(!salt||!encoded)return false;const key=await derive(password,salt,64) as Buffer;const expected=Buffer.from(encoded,'hex');return key.length===expected.length && timingSafeEqual(key,expected);}
export function sameOrigin(req:Request){const origin=req.headers.get('origin');const allowed=new Set(['https://www.macpro.kr','https://macpro.kr']);if(process.env.NODE_ENV!=='production')allowed.add(new URL(req.url).origin);if(!origin||!allowed.has(origin))throw new BoardError('요청 출처를 확인할 수 없습니다. 페이지를 새로고침해 주세요.',403);}
export async function jsonBody(req:Request){if(!req.headers.get('content-type')?.includes('application/json'))throw new BoardError('잘못된 요청 형식입니다.');const body=await req.text();if(Buffer.byteLength(body)>40000)throw new BoardError('입력 내용이 너무 깁니다.',413);try{return JSON.parse(body) as Record<string,unknown>;}catch{throw new BoardError('잘못된 요청입니다.');}}
export function field(value:unknown,label:string,min=1,max=120){if(typeof value!=='string')throw new BoardError(`${label}을 입력해 주세요.`);const v=value.trim();if(v.length<min||v.length>max)throw new BoardError(`${label}은 ${min}~${max}자로 입력해 주세요.`);return v;}
export async function browserId(){const jar=await cookies();let id=jar.get('board_browser')?.value;if(!id||!/^[a-f0-9]{48}$/.test(id)){id=randomBytes(24).toString('hex');jar.set('board_browser',id,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:86400*30});}return digest(id);}
export async function rateLimit(req:Request,scope:string,max:number,seconds:number){
  // Vercel replaces x-vercel-forwarded-for; do not trust client-controlled X-Forwarded-For in production.
  const ip=process.env.VERCEL?req.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim():req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const key=digest(`${scope}:${ip||'unknown'}`);const sql=boardDb();
  const rows=await sql`INSERT INTO board_rate_limits(key,hits,expires_at) VALUES(${key},1,now()+${seconds}*interval '1 second') ON CONFLICT(key) DO UPDATE SET hits=CASE WHEN board_rate_limits.expires_at<now() THEN 1 ELSE board_rate_limits.hits+1 END,expires_at=CASE WHEN board_rate_limits.expires_at<now() THEN now()+${seconds}*interval '1 second' ELSE board_rate_limits.expires_at END RETURNING hits`;
  if(Number(rows[0].hits)>max)throw new BoardError('요청이 많습니다. 잠시 후 다시 시도해 주세요.',429);
}
export async function consumeChallenge(id:unknown,answer:unknown){const challenge=field(id,'보안 확인',36,36);const response=field(answer,'계산식 정답',1,3);const browser=await browserId();const sql=boardDb();const rows=await sql`DELETE FROM board_challenges WHERE id=${challenge}::uuid AND browser_hash=${browser} RETURNING answer_hash,expires_at,created_at`;const row=rows[0];if(!row||new Date(row.expires_at).getTime()<Date.now()||digest(`${challenge}:${response}`)!==row.answer_hash)throw new BoardError('계산식 정답이 틀렸거나 만료됐습니다. 새 계산식으로 다시 입력해 주세요.');}
export async function grantInquiry(receipt:string){const exp=Date.now()+30*60*1000;const value=`${exp}.${digest(`${receipt}:${exp}`)}`;(await cookies()).set(`inquiry_${receipt}`,value,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/api/board',maxAge:1800});}
export async function hasInquiryGrant(receipt:string){const value=(await cookies()).get(`inquiry_${receipt}`)?.value;const [exp,sig]=value?.split('.')||[];if(!exp||!sig||Number(exp)<Date.now()||Number(exp)>Date.now()+31*60*1000)return false;const expected=digest(`${receipt}:${exp}`);const a=Buffer.from(sig);const b=Buffer.from(expected);return a.length===b.length&&timingSafeEqual(a,b);}
export function validReceipt(value:string){if(!/^PC-[A-F0-9]{16}$/.test(value))throw new BoardError('접수번호를 확인해 주세요.',404);return value;}
export function validUuid(value:string){if(!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value))throw new BoardError('게시글을 찾을 수 없습니다.',404);return value;}
export function failure(error:unknown){const known=error instanceof BoardError;return Response.json({error:known?error.message:'게시판 연결을 확인 중입니다. 잠시 후 다시 시도하거나 카톡으로 문의해 주세요.'},{status:known?error.status:503,headers:{'Cache-Control':'no-store','X-Robots-Tag':'noindex'}});}
export function reply(data:unknown,status=200){return Response.json(data,{status,headers:{'Cache-Control':'private, no-store','Vary':'Cookie','X-Robots-Tag':'noindex'}});}
