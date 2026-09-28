import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {default:'올바른 매입 | 고장난 노트북 매입',template:'%s | 올바른 매입'},
  description:'고장난 노트북도 모델과 상태를 확인해 매입 상담합니다. 부산은 현장매입, 그 외 전국은 택배매입으로 안내합니다.',
  robots:{index:true,follow:true},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ko"><body><header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="올바른 매입 홈"><span className="brand-mark">✓</span><span>올바른 <b>매입</b><small>노트북을 다시 가치 있게</small></span></Link><nav className="desktop-nav" aria-label="주 메뉴"><Link href="/#conditions">매입 품목</Link><Link href="/busan">부산 현장매입</Link><Link href="/regions">전국 택배매입</Link><Link href="/#process">매입 절차</Link></nav><Link className="header-cta" href="/#estimate">매입 안내 보기 <span>↗</span></Link></div></header>{children}<footer className="footer"><div className="shell footer-inner"><div><div className="footer-brand">✓ 올바른 매입</div><p>고장난 노트북도 상태에 맞게, 올바르게 확인합니다.</p></div><div><Link href="/busan">부산 현장매입</Link><Link href="/regions">전국 택배매입</Link><Link href="/#conditions">고장 유형</Link></div></div><div className="shell footer-note">상담 연락처와 사업자 정보는 운영 정보 확정 후 게시됩니다. 매입 가능 여부와 금액은 모델 및 실제 상태 확인 후 안내됩니다.</div></footer><nav className="mobile-nav" aria-label="모바일 메뉴"><Link href="/"><span>⌂</span>홈</Link><Link href="/#estimate"><span>▤</span>견적 안내</Link><Link href="/regions"><span>⌖</span>지역</Link><Link href="/#process"><span>☷</span>절차</Link></nav></body></html>;
}
