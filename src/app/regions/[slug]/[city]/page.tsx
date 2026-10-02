import {areaMeta} from '@/area-meta';
import {pageMetadata} from '@/seo';
import KeywordGallery from '@/components/keyword-gallery';
import {regionGallerySlot} from '@/region-keywords';
import ShippingAddress from '@/components/shipping-address';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {shipping} from '@/data';
import {localAreas} from '@/local-areas';
import {contactPhone,contactTel} from '@/contact';

type Params={params:Promise<{slug:string;city:string}>};
export function generateStaticParams(){return localAreas.map(a=>({slug:a.parent,city:a.slug}))}
export async function generateMetadata({params}:Params):Promise<Metadata>{
  const {slug,city}=await params;
  const a=localAreas.find(x=>x.parent===slug&&x.slug===city);
  return pageMetadata({title:areaMeta[`regions/${slug}/${city}`]?.title||'지역 안내',description:areaMeta[`regions/${slug}/${city}`]?.description||'',alternates:{canonical:`/regions/${slug}/${city}`}});
}
export default async function LocalRegion({params}:Params){
  const {slug,city}=await params;
  const area=localAreas.find(x=>x.parent===slug&&x.slug===city);
  const parent=shipping.find(x=>x.slug===slug);
  if(!area||!parent)notFound();
  const siblings=localAreas.filter(x=>x.parent===slug&&x.slug!==city);
  const slot=regionGallerySlot(`${slug}-${city}`);
  const gallery=<KeywordGallery pageKey={`${slug}-${city}`} title={`${area.name} 노트북 택배 상담 주제`} description="사진으로 모델과 상태를 확인한 뒤 접수 조건을 상담해 주세요." keywords={[`${area.name} 노트북 택배매입`,`${area.name} 고장난 노트북 발송`,`${area.name} 폐 노트북 상태 확인`,`${area.name} ${area.topic}`]} hrefs={[`/regions/${slug}/${city}#contact`,'/guide/packing','/condition/scrap-laptop',`/condition/${area.relatedCondition}`]} tags={[`${area.name} 택배 상담`,'모델 확인','안전 포장']}/>;
  return <main className="shell inner-page">
    <div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/regions">전국 택배매입</Link> / <Link href={`/regions/${slug}`}>{parent.name}</Link> / {area.name}</div>
    <div className="inner-hero violet"><span className="kicker">{parent.name.toUpperCase()} · DELIVERY</span><h1>{areaMeta[`regions/${slug}/${city}`].title}</h1><p>{area.intro}</p><div className="info-chip">▣ {area.name} 지역은 택배 접수 · 발송 전 전화 상담</div></div>
    {slot===0&&gallery}<ShippingAddress/>
    <div className="detail-grid"><section className="detail-card"><span className="kicker">LOCAL CHECK</span><h2>{area.topic}</h2><p>{area.practical}</p><p>방문매입은 부산 지역을 대상으로 안내하며, {area.name}에서는 사진과 상태를 먼저 확인한 뒤 택배 접수 조건을 안내합니다.</p></section><section className="detail-card"><span className="kicker">PREPARE</span><h2>{area.checkTitle}</h2><ol>{area.checks.map(check=><li key={check}>{check}</li>)}</ol></section></div>
    {slot===1&&gallery}<section className="content-panel"><span className="kicker">FREQUENT QUESTION</span><h2>{area.question}</h2><p>{area.answer}</p></section>
    <section className="content-panel local-process"><span className="kicker">DELIVERY PROCESS</span><h2>{area.name} 택배매입 진행 순서</h2><div className="local-steps"><div><b>01</b><strong>모델·상태 전달</strong><span>사진과 현재 증상을 정리</span></div><div><b>02</b><strong>접수 조건 상담</strong><span>발송 전 방식과 조건 확인</span></div><div><b>03</b><strong>안전 포장·발송</strong><span>화면과 모서리를 완충재로 보호</span></div><div><b>04</b><strong>실물 점검</strong><span>최종 매입 여부와 금액 안내</span></div></div></section>
    {slot===2&&gallery}<div className="notice-box"><strong>개인정보와 최종 금액</strong><p>자료를 백업하고 계정 상태를 확인해 주세요. 사전 상담은 예상 안내이며, 실물 상태에 따라 매입 가능 여부와 최종 조건이 달라질 수 있습니다.</p></div>
    <div className="local-cta" id="contact"><div><strong>{area.name} 노트북 택배매입 상담</strong><span>모델명과 증상을 정리해 전화로 알려주세요.</span></div><a href={contactTel}>{contactPhone} 전화하기 ↗</a></div>
    <div className="inline-links"><Link href={`/regions/${slug}`}>{parent.name} 지역 안내 →</Link><Link href={`/condition/${area.relatedCondition}`}>관련 고장 유형 ↗</Link><Link href="/guide/packing">택배 포장 가이드 ↗</Link>{siblings.map(x=><Link key={x.slug} href={`/regions/${slug}/${x.slug}`}>{x.name} ↗</Link>)}</div>
  </main>;
}
