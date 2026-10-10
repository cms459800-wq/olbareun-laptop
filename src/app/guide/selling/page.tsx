import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMetadata} from '@/seo';
import BuyingProcess from '@/components/buying-process';
import ContactPanel from '@/components/contact-panel';
import KeywordGallery from '@/components/keyword-gallery';
import {contactTel,contactPhone} from '@/contact';

export const metadata:Metadata=pageMetadata({title:'컴퓨터 매입방법 · 사진 상담부터 검수와 입금까지',description:'컴퓨터 모델 확인, 전화·카톡 상담, 부산 방문 방문 가능 여부 상담, 실물 검수와 최종 금액 동의 후 입금 안내까지 5단계 매입방법을 살펴보세요.',alternates:{canonical:'/guide/selling'}});
export default function Selling(){return <main className="shell inner-page selling-page">
 <div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/guide">매입 가이드</Link> / 매입방법</div>
 <div className="inner-hero"><span className="kicker">SELLING GUIDE</span><h1>처음 판매해도 편하게,<br/><em>컴퓨터 매입 5단계</em></h1><p>사진으로 상태를 알려주고, 접수 방법을 확인하세요.<br/>실물 검수 후 최종 금액에 동의하면 입금 절차를 안내합니다.</p><div className="selling-hero-actions"><a className="button primary" href={contactTel}>전화 상담 {contactPhone}</a><a className="button selling-kakao" href="https://open.kakao.com/o/ssjJI0Pi" target="_blank" rel="noopener noreferrer">카톡으로 사진 보내기 ↗</a></div></div>
 <nav className="selling-step-nav" aria-label="매입 단계 바로가기">{['정보 준비','사진 상담','기기 접수','실물 검수','입금 안내'].map((title,i)=><a key={title} href={`#step-${['model','consult','handover','inspect','payment'][i]}`}><span>{i+1}</span>{title}</a>)}</nav>
 <section aria-labelledby="selling-steps-title"><div className="section-head"><span className="kicker">FROM PHOTO TO PAYMENT</span><h2 id="selling-steps-title">사진 몇 장으로 시작하세요</h2><p>고장 원인을 몰라도 현재 상태를 있는 그대로 알려주시면 됩니다.</p></div><BuyingProcess detailed/></section>
 <section className="selling-route-note"><div><strong>부산에서 판매하시나요?</strong><p>위치와 수량을 확인한 뒤 방문 가능 여부와 일정을 상담합니다.</p><Link href="/busan">부산 현장매입 안내 ↗</Link></div><div><strong>부산 외 지역에 계신가요?</strong><p>현재 부산 방문매입 중심으로 운영합니다. 위치와 수량을 알려주고 방문 가능 여부를 별도로 문의해 주세요.</p><Link href="/regions">방문 가능 지역 안내 ↗</Link></div></section>
 
 <section className="selling-faq"><div className="section-head"><h2>접수 전에 많이 묻는 질문</h2></div><details><summary>모델명을 모르거나 전원이 안 켜져도 문의할 수 있나요?</summary><p>기기 전체와 본체 측면·뒷면 라벨 사진, 전원 케이블 유무를 준비해 주세요. 고장 원인을 임의로 판단하지 않고 현재 반응을 알려주시면 됩니다.</p></details><details><summary>사진 상담에서 안내받은 금액이 최종 금액인가요?</summary><p>사진은 사전 확인 자료입니다. 실제 사양과 부품·작동 상태를 검수한 뒤 최종 매입 조건을 안내합니다.</p></details><details><summary>방문은 언제 가능한가요?</summary><p>부산 내 위치와 본체 수량·사양을 먼저 알려주세요. 방문 가능 여부와 일정은 상담으로 조율합니다. 부산 외 지역은 방문 가능 여부를 별도로 문의해야 합니다.</p></details><details><summary>컴퓨터에 남아 있는 자료는 어떻게 하나요?</summary><p>필요한 파일은 기기를 넘기기 전에 백업해 주세요. 모든 컴퓨터는 매입 후 저장장치를 천공·파쇄하고 작업 사진을 전송해 드립니다. 계정 연결 해제와 자료 백업은 미리 확인해야 합니다.</p></details></section>
 <KeywordGallery pageKey="guide-selling" title="매입방법과 함께 확인할 4가지" keywords={['컴퓨터 모델명 사진 준비','컴퓨터 방문 준비 방법','실물 검수와 매입 금액','자료 백업과 저장장치 처리']} hrefs={['/guide/model','/guide/visit','/guide/price','/guide/privacy']} tags={['매입방법','접수 준비','최종 조건 확인']}/>
 <ContactPanel/>
 </main>}
