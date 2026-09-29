import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {brands} from '@/brands';
import {contactPhone,contactTel} from '@/contact';

export function generateStaticParams(){return brands.map(brand=>({slug:brand.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const brand=brands.find(item=>item.slug===slug);
  return {
    title:brand?`${brand.name} 매입 안내`:'브랜드 안내',
    description:brand?`${brand.name}의 모델명과 상태 확인 방법, 부산 현장매입 및 전국 택배매입 상담 준비를 안내합니다.`:'',
    alternates:{canonical:`/brand/${slug}`},
  };
}

export default async function BrandPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const brand=brands.find(item=>item.slug===slug);
  if(!brand)notFound();
  return <main className="shell inner-page">
    <div className="breadcrumbs"><Link href="/">홈</Link> / 브랜드 / {brand.name}</div>
    <div className="inner-hero"><span className="kicker">LAPTOP BRAND</span><h1>{brand.name}<br/><em>매입 안내</em></h1><p>{brand.intro}</p></div>
    <div className="brand-detail-grid">
      <article className="detail-card"><span className="feature-icon">⌕</span><h2>모델명 확인</h2><p>{brand.model}</p></article>
      <article className="detail-card"><span className="feature-icon">▤</span><h2>기기 상태 확인</h2><p>{brand.condition}</p></article>
      <article className="detail-card"><span className="feature-icon">✓</span><h2>자료와 계정 준비</h2><p>{brand.account}</p></article>
    </div>
    <div className="notice-box"><strong>매입 가능 여부와 금액</strong><p>정확한 매입 조건은 모델·사양·실물 상태를 확인한 뒤 안내합니다. 사진 상담만으로 최종 금액이 확정되지는 않습니다.</p></div>
    <div className="inline-links"><Link href={`/condition/${brand.related}`}>{brand.relatedText} ↗</Link><Link href="/guide/privacy">개인정보 정리 방법 ↗</Link><Link href="/busan">부산 현장매입 ↗</Link><Link href="/regions">전국 택배매입 ↗</Link><a href={contactTel}>전화 상담 {contactPhone} ↗</a></div>
  </main>;
}
