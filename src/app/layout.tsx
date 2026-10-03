import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppIcon from '@/components/app-icon';
import MobileMenu from '@/components/mobile-menu';
import './globals.css';
import {siteUrl} from '@/site';
import {contactPhone,contactTel} from '@/contact';

export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  verification:{other:{'naver-site-verification':'93d79a08427b46baa79c380f9899babcd752b022'}},
  title: {default:'올바른 매입 | 고장난 노트북 매입',template:'%s | 올바른 매입'},
  description:'고장난 노트북도 모델과 상태를 확인해 매입 상담합니다. 부산은 현장매입, 그 외 전국은 택배매입으로 안내합니다.',
  robots:{index:true,follow:true},
  openGraph:{siteName:'올바른 매입',type:'website',locale:'ko_KR'},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="ko"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'올바른 매입',url:siteUrl}).replace(/</g,'\\u003c')}}/><header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="올바른 매입 홈"><Image className="site-logo" src="/uploads/logo/logo-laptop.png" alt="올바른 매입" width={520} height={180} priority/></Link><nav className="desktop-nav" aria-label="주 메뉴"><Link href="/#conditions">매입 품목</Link><Link href="/busan">부산 현장매입</Link><Link href="/regions">전국 택배매입</Link><Link href="/guide">매입 가이드</Link></nav><a className="header-cta" href={contactTel}>전화 상담 {contactPhone} <span>↗</span></a><MobileMenu/></div></header>{children}<footer className="footer"><div className="shell footer-inner"><div><Link href="/" className="footer-logo-link" aria-label="올바른 매입 홈"><Image className="footer-logo" src="/uploads/logo/logo-laptop.png" alt="올바른 매입" width={520} height={180}/></Link><div className="footer-brand">폐컴퓨터 전문 매입업체 [ 올바른 매입 ]</div><div className="footer-business"><p>상호: 올바른 <span>|</span> 대표자: 박자영 <span>|</span> 사업자등록번호: 808-66-00808</p><p>업태: 건설업 <span>|</span> 업종: 철거 폐기물</p><p>주소: 부산광역시 북구 시랑로 132번길 17-4 504</p><p>이메일: <a href="mailto:chlpjy@naver.com">chlpjy@naver.com</a></p></div><a className="footer-phone" href={contactTel}>전화 상담 {contactPhone} ↗</a></div><div><Link href="/busan">부산 현장매입</Link><Link href="/regions">전국 택배매입</Link><Link href="/guide">매입 가이드</Link></div></div><div className="shell footer-note">매입 가능 여부와 금액은 모델 및 실제 상태 확인 후 안내됩니다.</div></footer><nav className="mobile-nav" aria-label="모바일 메뉴"><Link href="/" className="mobile-nav-item"><span className="mobile-nav-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/></svg></span><span className="mobile-nav-label">홈</span></Link><Link href="/guide/selling#step-model" className="mobile-nav-item"><span className="mobile-nav-icon" aria-hidden="true"><AppIcon name="list" size={22}/></span><span className="mobile-nav-label">정보 정리</span></Link><Link href="/regions" className="mobile-nav-item"><span className="mobile-nav-icon" aria-hidden="true"><AppIcon name="location" size={22}/></span><span className="mobile-nav-label">지역</span></Link><a className="mobile-nav-item mobile-nav-kakao" href="https://open.kakao.com/o/ssjJI0Pi" aria-label="올바른 매입 카톡 문의"><span className="mobile-nav-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.4 2 10.6c0 2.7 1.8 5.1 4.6 6.4l-1.1 4 4.6-2.9c.6.1 1.2.1 1.9.1 5.5 0 10-3.4 10-7.6S17.5 3 12 3Z"/></svg></span><span className="mobile-nav-label">카톡 문의</span></a></nav></body></html>;
}
