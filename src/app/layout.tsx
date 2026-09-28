import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import {siteUrl} from '@/site';
import {contactPhone,contactTel} from '@/contact';

export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  title: {default:'올바른 매입 | 고장난 노트북 매입',template:'%s | 올바른 매입'},
  description:'고장난 노트북도 모델과 상태를 확인해 매입 상담합니다. 부산은 현장매입, 그 외 전국은 택배매입으로 안내합니다.',
  robots:{index:true,follow:true},
  openGraph:{siteName:'올바른 매입',type:'website',locale:'ko_KR'},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'올바른 매입',url:siteUrl}).replace(/</g,'\\u003c')}}/><header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="올바른 매입 홈"><span className="brand-mark">✓</span><span>올바른 <b>매입</b><small>노트북을 다시 가치 있게</small></span></Link><nav className="desktop-nav" aria-label="주 메뉴"><Link href="/#conditions">매입 품목</Link><Link href="/busan">부산 현장매입</Link><Link href="/regions">전국 택배매입</Link><Link href="/guide">매입 가이드</Link></nav><a className="header-cta" href={contactTel}>전화 상담 {contactPhone} <span>↗</span></a></div></header>{children}<footer className="footer"><div className="shell footer-inner"><div><div className="footer-brand">✓ 올바른 매입</div><p>고장난 노트북도 상태에 맞게, 올바르게 확인합니다.</p><a className="footer-phone" href={contactTel}>전화 상담 {contactPhone} ↗</a></div><div><Link href="/busan">부산 현장매입</Link><Link href="/regions">전국 택배매입</Link><Link href="/guide">매입 가이드</Link></div></div><div className="shell footer-note">사업자 정보와 카카오톡 링크는 확인 후 게시됩니다. 매입 가능 여부와 금액은 모델 및 실제 상태 확인 후 안내됩니다.</div></footer><nav className="mobile-nav" aria-label="모바일 메뉴"><Link href="/"><span>⌂</span>홈</Link><Link href="/#estimate"><span>▤</span>정보 정리</Link><Link href="/regions"><span>⌖</span>지역</Link><a href={contactTel}><span>☎</span>전화 상담</a></nav></body></html>;
}
