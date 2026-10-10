import Link from 'next/link';
import {BoardHeader} from '@/components/board-ui';
import InquiryList from '@/components/inquiry-list';
export default function Inquiries(){return <main className="shell board-page"><div className="breadcrumbs"><Link href="/">홈</Link> / 매입문의</div><BoardHeader title="매입문의" kicker="PRIVATE INQUIRY BOARD" description="사양·수량·고장 상태를 알려주세요. 내용과 연락처는 비공개로 보관합니다." action={<Link href="/inquiries/new" className="button primary">문의 작성하기 ↗</Link>}/><InquiryList/><aside className="board-help"><strong>접수번호나 비밀번호를 잊으셨나요?</strong><p>등록한 연락처로 본인 확인 후 안내받으세요. 문의 내용은 계속 비공개로 보호됩니다.</p><a href="https://open.kakao.com/o/ssjJI0Pi">올바른 매입 카톡 상담 ↗</a></aside></main>;}
