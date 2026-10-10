import Link from 'next/link';
import {notFound} from 'next/navigation';
import {pageMetadata} from '@/seo';
import {areaMeta} from '@/area-meta';
import {localAreas} from '@/local-areas';
import VisitPolicy from '@/components/visit-policy';
import ContactPanel from '@/components/contact-panel';
type Params={params:Promise<{slug:string;city:string}>};
export function generateStaticParams(){return localAreas.map(a=>({slug:a.parent,city:a.slug}))}
export async function generateMetadata({params}:Params){const {slug,city}=await params;return pageMetadata({alternates:{canonical:`/regions/${slug}/${city}`}})}
export default async function LocalRegion({params}:Params){const {slug,city}=await params;const a=localAreas.find(x=>x.parent===slug&&x.slug===city);if(!a)notFound();return <main className="shell inner-page"><div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/regions">방문 가능 지역</Link> / {a.name}</div><div className="inner-hero"><span className="kicker">LOCAL PREPARATION</span><h1>{areaMeta[`regions/${slug}/${city}`].title}</h1><p>{a.intro}</p></div><VisitPolicy/><div className="detail-grid"><section className="detail-card"><h2>{a.topic}</h2><p>{a.practical}</p></section><section className="detail-card"><h2>{a.checkTitle}</h2><ol>{a.checks.map(c=><li key={c}>{c}</li>)}</ol></section></div><section className="content-panel"><h2>{a.question}</h2><p>{a.answer}</p></section><div className="inline-links"><Link href={`/regions/${slug}`}>상위 지역 준비 안내 ↗</Link><Link href={`/condition/${a.relatedCondition}`}>관련 고장 유형 ↗</Link><Link href="/guide/visit">방문 상담 준비 ↗</Link></div><ContactPanel/></main>}
