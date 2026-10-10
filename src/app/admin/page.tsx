import {redirect} from 'next/navigation';
import {isAdmin} from '@/lib/auth/server';
import AdminBoards from '@/components/admin-boards';
export const dynamic='force-dynamic';
export default async function Page(){if(!await isAdmin())redirect('/admin/login');return <main className="shell board-page"><AdminBoards/></main>;}
