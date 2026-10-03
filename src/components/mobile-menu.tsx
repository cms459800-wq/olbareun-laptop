'use client';

import Link from 'next/link';
import {useEffect, useRef} from 'react';
import {contactPhone, contactTel} from '@/contact';

const links = [
  {href:'/#conditions', title:'매입 품목', detail:'고장난 노트북 · 폐노트북'},
  {href:'/guide/selling', title:'매입 방법', detail:'사진 상담부터 택배 접수까지'},
  {href:'/busan', title:'부산 현장매입', detail:'지역별 방문 상담 안내'},
  {href:'/regions', title:'전국 택배매입', detail:'지역별 착불택배 접수 안내'},
  {href:'/guide', title:'매입 가이드', detail:'모델명 · 포장 · 저장장치 처리'},
];

export default function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const menu = menuRef.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    };
    const closeEscape = (event: KeyboardEvent) => {
      const menu = menuRef.current;
      if (event.key === 'Escape' && menu?.open) {
        menu.open = false;
        menu.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeEscape);
    };
  }, []);
  const closeMenu = () => { if (menuRef.current) menuRef.current.open = false; };
  return <details className="mobile-header-menu" ref={menuRef}>
    <summary aria-controls="mobile-header-navigation">
      <span className="hamburger-lines" aria-hidden="true"><i/><i/><i/></span>
      <span className="menu-label-closed">메뉴</span><span className="menu-label-open">닫기</span>
    </summary>
    <nav id="mobile-header-navigation" className="mobile-menu-panel" aria-label="모바일 주요 페이지">
      <div className="mobile-menu-heading">어떤 도움이 필요하세요?<small>노트북 매입 안내를 빠르게 찾아보세요.</small></div>
      <div className="mobile-menu-links">{links.map(link => <Link key={link.href} href={link.href} onClick={closeMenu}><span><strong>{link.title}</strong><small>{link.detail}</small></span><span aria-hidden="true">↗</span></Link>)}</div>
      <div className="mobile-menu-contact"><a className="mobile-menu-chat" href="https://open.kakao.com/o/ssjJI0Pi" onClick={closeMenu}>카톡으로 사진 상담 <span aria-hidden="true">↗</span></a><a href={contactTel} onClick={closeMenu}>전화 상담 <strong>{contactPhone}</strong></a></div>
    </nav>
  </details>;
}
