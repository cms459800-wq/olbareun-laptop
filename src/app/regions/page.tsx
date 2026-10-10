import Link from 'next/link';
import {pageMetadata} from '@/seo';
import {busan,shipping} from '@/data';
import VisitPolicy from '@/components/visit-policy';
export const metadata=pageMetadata({alternates:{canonical:'/regions'}});
export default function Regions(){return <main className="shell inner-page"><div className="breadcrumbs"><Link href="/">홈</Link> / 방문 가능 지역</div><div className="inner-hero"><span className="kicker">VISIT AREAS</span><h1>컴퓨터 방문매입<br/><em>가능 지역을 확인하세요</em></h1><p>부산 지역은 사진과 수량을 확인한 뒤 방문 가능 여부와 일정을 상담합니다. 부산 외 지역은 별도 문의가 필요합니다.</p></div><VisitPolicy/><section className="local-list"><div className="section-head"><h2>부산 16개 구·군 방문 상담</h2><p>거주 지역을 선택해 준비할 정보를 확인하세요.</p></div><div className="area-grid">{busan.map(a=><Link className="area-card" href={`/busan/${a.slug}`} key={a.slug}><strong>{a.name}</strong><small>{a.districts}</small><b>방문 상담 안내 ↗</b></Link>)}</div></section><section className="local-list"><div className="section-head"><h2>부산 외 지역의 상담 준비</h2><p>지역별 컴퓨터 정리 정보를 확인할 수 있습니다. 해당 지역 방문을 보장하는 안내는 아닙니다.</p></div><div className="ship-pills">{shipping.map(a=><Link href={`/regions/${a.slug}`} key={a.slug}>{a.name} 준비 안내 ↗</Link>)}</div></section></main>}
