import Link from 'next/link';
import InquiryForm from '@/components/inquiry-form';
export default function NewInquiry(){return <main className="shell board-page"><div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/inquiries">매입문의</Link> / 작성</div><div className="board-header"><div><span className="kicker">PRIVATE CONSULTATION</span><h1>비밀 매입문의 작성</h1><p>컴퓨터 정보와 연락처를 남겨주세요. 작성 내용은 비밀번호 확인 후에만 볼 수 있습니다.</p></div></div><InquiryForm/></main>;}
