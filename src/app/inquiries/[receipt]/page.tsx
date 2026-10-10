import Link from 'next/link';
import InquiryDetail from '@/components/inquiry-detail';
export default async function Page({params}:{params:Promise<{receipt:string}>}){const {receipt}=await params;return <main className="shell board-page"><div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/inquiries">매입문의</Link> / 내 문의 확인</div><InquiryDetail receipt={receipt}/></main>;}
