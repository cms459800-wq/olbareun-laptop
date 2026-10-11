import 'server-only';
import {createNeonAuth} from '@neondatabase/auth/next/server';

let instance:ReturnType<typeof createNeonAuth>|undefined;
export function getAuth() {
  if (!instance) {
    const baseUrl=process.env.NEON_AUTH_BASE_URL;
    const secret=process.env.NEON_AUTH_COOKIE_SECRET;
    if (!baseUrl || !secret || secret.length<32) throw new Error('BOARD_AUTH_NOT_CONFIGURED');
    instance=createNeonAuth({baseUrl,cookies:{secret,sessionDataTtl:1}});
  }
  return instance;
}
export async function isAdmin() {
  const {data:session}=await getAuth().getSession();
  const emails=(process.env.BOARD_ADMIN_EMAILS||'').split(',').map(e=>e.trim().toLowerCase()).filter(Boolean);
  return !!session?.user && session.user.emailVerified===true && emails.includes(session.user.email.toLowerCase());
}
