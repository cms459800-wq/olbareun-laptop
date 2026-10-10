import Link from 'next/link';
import {notFound} from 'next/navigation';
import {pageMetadata} from '@/seo';
import {areaMeta} from '@/area-meta';
import {shipping} from '@/data';
import {regionTopics} from '@/region-topics';
import {localFor} from '@/local-areas';
import VisitPolicy from '@/components/visit-policy';
import ContactPanel from '@/components/contact-panel';
import KeywordGallery from '@/components/keyword-gallery';
export function generateStaticParams(){return shipping.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return pageMetadata({alternates:{canonical:`/regions/${slug}`}})}
export default async function Region({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=shipping.find(x=>x.slug===slug);if(!a)notFound();const topic=regionTopics[slug];const children=localFor(slug);return <main className="shell inner-page"><div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/regions">방문 가능 지역</Link> / {a.name}</div><div className="inner-hero"><span className="kicker">COMPUTER PREPARATION</span><h1>{areaMeta[`regions/${slug}`].title}</h1><p>{topic.intro}</p><div className="info-chip">{a.districts}</div></div><VisitPolicy/><section className="content-panel"><h2>{topic.title}</h2><ul>{topic.checks.map(c=><li key={c}>{c}</li>)}</ul><h3>{topic.question}</h3><p>{topic.answer}</p></section><KeywordGallery pageKey={`region-${slug}`} title={`${a.name} 컴퓨터 정리 전 확인`} keywords={['컴퓨터 모델·사양 확인','고장 본체 상태 기록','자료 백업과 계정 정리','방문 가능 여부 문의']} hrefs={['/guide/model','/condition/no-power','/guide/privacy','/guide/visit']}/>{children.length>0&&<section className="local-list"><div className="section-head"><h2>{a.name} 세부 지역 준비 안내</h2></div><div className="ship-pills">{children.map(c=><Link key={c.slug} href={`/regions/${slug}/${c.slug}`}>{c.name} · {c.topic} ↗</Link>)}</div></section>}<ContactPanel/></main>}
