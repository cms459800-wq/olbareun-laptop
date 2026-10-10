import {randomBytes,randomInt,randomUUID} from 'node:crypto';
import {revalidatePath} from 'next/cache';
import {isAdmin} from '@/lib/auth/server';
import {boardDb,listNotices,listInquiries} from '@/lib/board/db';
import {BoardError,browserId,checkPassword,consumeChallenge,digest,failure,field,grantInquiry,hasInquiryGrant,hashPassword,jsonBody,rateLimit,reply,sameOrigin,validReceipt,validUuid} from '@/lib/board/security';

export const runtime='nodejs';
export const dynamic='force-dynamic';
type Context={params:Promise<{path:string[]}>};
async function requireAdmin(){if(!await isAdmin())throw new BoardError('관리자 로그인이 필요합니다.',403);}
function refreshNotice(id:string){revalidatePath('/');revalidatePath('/notices');revalidatePath(`/notices/${id}`);}
function noticeFields(b:Record<string,unknown>){const date=field(b.display_date,'표시 날짜',10,10);if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||isNaN(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date)throw new BoardError('올바른 날짜를 입력해 주세요.');const views=Number(b.views);if(!Number.isInteger(views)||views<0||views>2147483647)throw new BoardError('조회수는 0 이상의 정수로 입력해 주세요.');return {title:field(b.title,'제목',1,120),body:field(b.body,'내용',1,20000),date,views,pinned:b.pinned===true,published:b.published===true};}

export async function GET(req:Request,ctx:Context){try{
 const {path:p}=await ctx.params;const sql=boardDb();const page=Math.max(1,Math.min(10000,Number(new URL(req.url).searchParams.get('page'))||1));const offset=(page-1)*20;
 if(p[0]==='captcha'&&p.length===1){await rateLimit(req,'captcha',60,900);const browser=await browserId();const id=randomUUID(),a=randomInt(1,10),b=randomInt(1,10);await sql`INSERT INTO board_challenges(id,browser_hash,answer_hash,expires_at) VALUES(${id},${browser},${digest(`${id}:${a+b}`)},now()+interval '10 minutes')`;await sql`DELETE FROM board_challenges WHERE expires_at<now()`;return reply({id,question:`${a} + ${b} =`});}
 if(p[0]==='summary'){const [notices,inquiries]=await Promise.all([listNotices(5),listInquiries(5)]);return reply({notices,inquiries});}
 if(p[0]==='notices'&&p.length===1){const count=await sql`SELECT count(*)::int AS total FROM board_notices WHERE published`;return reply({items:await listNotices(20,offset),total:count[0].total,page});}
 if(p[0]==='notices'&&p.length===2){const id=validUuid(p[1]);const rows=await sql`SELECT id,title,body,display_date::text,views,pinned,published FROM board_notices WHERE id=${id} AND published`;if(!rows[0])throw new BoardError('공지사항을 찾을 수 없습니다.',404);return reply(rows[0]);}
 if(p[0]==='inquiries'&&p.length===1){const count=await sql`SELECT count(*)::int AS total FROM board_inquiries`;return reply({items:await listInquiries(20,offset),total:count[0].total,page});}
 if(p[0]==='inquiries'&&p.length===2){const receipt=validReceipt(p[1]);if(!await hasInquiryGrant(receipt)&&!await isAdmin())throw new BoardError('비밀번호를 확인해 주세요.',401);const rows=await sql`SELECT id,receipt,title,author,phone,location,body,reply,status,created_at FROM board_inquiries WHERE receipt=${receipt}`;if(!rows[0])throw new BoardError('문의를 찾을 수 없습니다.',404);return reply(rows[0]);}
 if(p[0]==='admin'){await requireAdmin();const notices=await sql`SELECT id,title,body,display_date::text,views,pinned,published FROM board_notices ORDER BY display_date DESC,created_at DESC LIMIT 20 OFFSET ${offset}`;const inquiries=await sql`SELECT id,receipt,title,author,phone,location,body,reply,status,created_at FROM board_inquiries ORDER BY created_at DESC LIMIT 20 OFFSET ${offset}`;const [noticeCount,inquiryCount]=await Promise.all([sql`SELECT count(*)::int AS total FROM board_notices`,sql`SELECT count(*)::int AS total FROM board_inquiries`]);return reply({notices,inquiries,noticeTotal:noticeCount[0].total,inquiryTotal:inquiryCount[0].total});}
 throw new BoardError('페이지를 찾을 수 없습니다.',404);
 }catch(e){return failure(e);}}

export async function POST(req:Request,ctx:Context){try{
 sameOrigin(req);const {path:p}=await ctx.params;const sql=boardDb();const b=await jsonBody(req);
 if(p[0]==='notices'&&p.length===1){await requireAdmin();const n=noticeFields(b);const rows=await sql`INSERT INTO board_notices(title,body,display_date,views,pinned,published) VALUES(${n.title},${n.body},${n.date},${n.views},${n.pinned},${n.published}) RETURNING id`;refreshNotice(rows[0].id);return reply({id:rows[0].id},201);}
 if(p[0]==='notices'&&p[2]==='view'&&p.length===3){const id=validUuid(p[1]);await rateLimit(req,'notice-view',120,900);const browser=await browserId();const rows=await sql`WITH seen AS (INSERT INTO board_notice_reads(notice_id,browser_hash) SELECT id,${browser} FROM board_notices WHERE id=${id} AND published ON CONFLICT DO NOTHING RETURNING notice_id) UPDATE board_notices SET views=views+1 WHERE id IN (SELECT notice_id FROM seen) RETURNING views`;const count=rows[0]|| (await sql`SELECT views FROM board_notices WHERE id=${id} AND published`)[0];if(!count)throw new BoardError('공지사항을 찾을 수 없습니다.',404);return reply(count);}
 if(p[0]==='inquiries'&&p.length===1){await rateLimit(req,'inquiry-create',5,3600);if(b.website)throw new BoardError('잘못된 요청입니다.');if(b.consent!==true)throw new BoardError('개인정보 수집·이용에 동의해 주세요.');const title=field(b.title,'제목',2,120),author=field(b.author,'이름',1,40),phone=field(b.phone,'연락처',9,30),location=field(b.location,'지역',1,120),body=field(b.body,'문의 내용',5,10000),password=field(b.password,'비밀번호',8,128);if(!/^[0-9+()\s-]+$/.test(phone))throw new BoardError('연락 가능한 전화번호를 입력해 주세요.');await consumeChallenge(b.challenge_id,b.answer);const receipt=`PC-${randomBytes(8).toString('hex').toUpperCase()}`;const hash=await hashPassword(password);await sql`INSERT INTO board_inquiries(receipt,title,author,phone,location,body,password_hash) VALUES(${receipt},${title},${author},${phone},${location},${body},${hash})`;await grantInquiry(receipt);return reply({receipt},201);}
 if(p[0]==='inquiries'&&p[2]==='unlock'&&p.length===3){const receipt=validReceipt(p[1]);await rateLimit(req,`unlock-${receipt}`,10,900);await rateLimit(req,'unlock-global',30,900);const password=field(b.password,'비밀번호',8,128);const rows=await sql`SELECT password_hash FROM board_inquiries WHERE receipt=${receipt}`;const dummy='00000000000000000000000000000000:'+ '0'.repeat(128);const valid=await checkPassword(password,rows[0]?.password_hash||dummy);if(!rows[0]||!valid)throw new BoardError('접수번호 또는 비밀번호가 일치하지 않습니다.',401);await grantInquiry(receipt);return reply({ok:true});}
 throw new BoardError('잘못된 요청입니다.',404);
 }catch(e){return failure(e);}}

export async function PATCH(req:Request,ctx:Context){try{
 sameOrigin(req);await requireAdmin();const {path:p}=await ctx.params;const b=await jsonBody(req);const sql=boardDb();
 if(p[0]==='notices'&&p.length===2){const id=validUuid(p[1]),n=noticeFields(b);const rows=await sql`UPDATE board_notices SET title=${n.title},body=${n.body},display_date=${n.date},views=${n.views},pinned=${n.pinned},published=${n.published},updated_at=now() WHERE id=${id} RETURNING id`;if(!rows[0])throw new BoardError('글을 찾을 수 없습니다.',404);refreshNotice(id);return reply({ok:true});}
 if(p[0]==='inquiries'&&p.length===2){const receipt=validReceipt(p[1]);const text=typeof b.reply==='string'?b.reply.trim():'';if(text.length>10000)throw new BoardError('답변이 너무 깁니다.');const status=text?'answered':b.status==='reviewing'?'reviewing':'received';const rows=await sql`UPDATE board_inquiries SET reply=${text},status=${status},updated_at=now() WHERE receipt=${receipt} RETURNING id`;if(!rows[0])throw new BoardError('문의를 찾을 수 없습니다.',404);return reply({ok:true});}
 throw new BoardError('잘못된 요청입니다.',404);
 }catch(e){return failure(e);}}
