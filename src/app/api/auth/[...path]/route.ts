import {getAuth} from '@/lib/auth/server';
import {BoardError,failure,rateLimit,sameOrigin} from '@/lib/board/security';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export async function GET(req:Request,context:{params:Promise<{path:string[]}>}){try{return await getAuth().handler().GET(req,context);}catch(e){return failure(e);}}
export async function POST(req:Request,context:{params:Promise<{path:string[]}>}){try{
 sameOrigin(req);await rateLimit(req,'admin-auth',30,900);
 if(new URL(req.url).pathname.endsWith('/sign-up/email')){const b=await req.clone().json();const allowed=(process.env.BOARD_ADMIN_EMAILS||'').split(',').map(e=>e.trim().toLowerCase());if(!allowed.includes(String(b.email||'').toLowerCase()))throw new BoardError('관리자용 계정만 등록할 수 있습니다.',403);}
 return await getAuth().handler().POST(req,context);
 }catch(e){return failure(e);}}
