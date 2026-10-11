import 'server-only';
import {neon} from '@neondatabase/serverless';

export function boardDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('BOARD_DATABASE_NOT_CONFIGURED');
  return neon(url);
}
export type Notice = {id:string; title:string; body:string; display_date:string; views:number; pinned:boolean; published:boolean};
export type PublicInquiry = {receipt:string; created_at:string; status:'received'|'reviewing'|'answered';is_sample:boolean;sample_title:string|null};
export type Inquiry = PublicInquiry & {id:string; title:string; author:string; phone:string; location:string; body:string; reply:string};
export async function listNotices(limit=20, offset=0, admin=false) {
  const sql=boardDb();
  return await sql`SELECT id,title,display_date::text,views,pinned,published FROM board_notices WHERE (${admin} OR published) ORDER BY pinned DESC,display_date DESC,created_at DESC LIMIT ${limit} OFFSET ${offset}` as Omit<Notice,'body'>[];
}
export async function listInquiries(limit=20,offset=0) {
  const sql=boardDb();
  return await sql`SELECT receipt,created_at,status,is_sample,CASE WHEN is_sample THEN title ELSE NULL END AS sample_title FROM board_inquiries ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}` as PublicInquiry[];
}
