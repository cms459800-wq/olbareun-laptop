import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {boardDb,type Notice} from '@/lib/board/db';
import {DateText} from '@/components/board-ui';
import NoticeViews from '@/components/notice-views';
export const dynamic='force-dynamic';
async function find(id:string){if(!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(id))return null;const sql=boardDb();return (await sql`SELECT id,title,body,display_date::text,views,pinned,published FROM board_notices WHERE id=${id} AND published`)[0] as Notice|undefined;}
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{const {id}=await params;const n=await find(id);return {title:n?.title||'공지사항',description:n?.body.slice(0,140),alternates:{canonical:`/notices/${id}`},robots:{index:!!n,follow:true}};}
export default async function NoticePage({params}:{params:Promise<{id:string}>}){const {id}=await params;const n=await find(id);if(!n)notFound();return <main className="shell board-page"><div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/notices">공지사항</Link></div><article className="board-article"><span className="board-pill">{n.pinned?'중요 공지':'공지'}</span><h1>{n.title}</h1><div className="board-article-meta"><span>올바른 매입</span><DateText value={n.display_date}/><NoticeViews id={id} initial={n.views}/></div><div className="board-prose">{n.body}</div></article><div className="board-bottom-links"><Link href="/notices">← 공지 목록</Link><Link href="/inquiries/new">매입문의 작성 ↗</Link><Link href="/admin/login">관리자 접속</Link></div></main>;}
