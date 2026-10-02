import type {Metadata} from 'next';
import Link from 'next/link';
import {pageMetadata} from '@/seo';
import BuyingProcess from '@/components/buying-process';
import ShippingAddress from '@/components/shipping-address';
import ContactPanel from '@/components/contact-panel';
import KeywordGallery from '@/components/keyword-gallery';
import {contactTel,contactPhone} from '@/contact';

export const metadata:Metadata=pageMetadata({title:'노트북 매입방법 · 사진 상담부터 검수와 입금까지',description:'노트북 모델 확인, 전화·카톡 상담, 부산 방문 또는 전국 택배 접수, 실물 검수와 최종 금액 동의 후 입금 안내까지 5단계 매입방법을 살펴보세요.',alternates:{canonical:'/guide/selling'}});
export default function Selling(){return <main className="shell inner-page selling-page">
 <div className="breadcrumbs"><Link href="/">홈</Link> / <Link href="/guide">매입 가이드</Link> / 매입방법</div>
 <div className="inner-hero"><span className="kicker">SELLING GUIDE</span><h1>처음 판매해도 편하게,<br/><em>노트북 매입 5단계</em></h1><p>사진으로 상태를 알려주고, 접수 방법을 확인하세요.<br/>실물 검수 후 최종 금액에 동의하면 입금 절차를 안내합니다.</p><div className="selling-hero-actions"><a className="button primary" href={contactTel}>전화 상담 {contactPhone}</a><a className="button selling-kakao" href="https://open.kakao.com/o/ssjJI0Pi" target="_blank" rel="noopener noreferrer">카톡으로 사진 보내기 ↗</a></div></div>
 <nav className="selling-step-nav" aria-label="매입 단계 바로가기">{['정보 준비','사진 상담','기기 접수','실물 검수','입금 안내'].map((title,i)=><a key={title} href={`#step-${['model','consult','handover','inspect','payment'][i]}`}><span>{i+1}</span>{title}</a>)}</nav>
 <section aria-labelledby="selling-steps-title"><div className="section-head"><span className="kicker">FROM PHOTO TO PAYMENT</span><h2 id="selling-steps-title">사진 몇 장으로 시작하세요</h2><p>고장 원인을 몰라도 현재 상태를 있는 그대로 알려주시면 됩니다.</p></div><BuyingProcess detailed/></section>
 <section className="selling-route-note"><div><strong>부산에서 판매하시나요?</strong><p>위치와 수량을 확인한 뒤 방문 가능 여부와 일정을 상담합니다.</p><Link href="/busan">부산 현장매입 안내 ↗</Link></div><div><strong>부산 외 지역에서 보내시나요?</strong><p>사진 상담 후 발송 조건을 확인하고 안전하게 포장해 택배로 접수합니다.</p><Link href="/regions">전국 택배매입 안내 ↗</Link></div></section>
 <ShippingAddress/>
 <section className="selling-faq"><div className="section-head"><h2>접수 전에 많이 묻는 질문</h2></div><details><summary>모델명을 모르거나 전원이 안 켜져도 문의할 수 있나요?</summary><p>기기 전체와 하판 라벨 사진, 충전기 유무를 준비해 주세요. 고장 원인을 임의로 판단하지 않고 현재 반응을 알려주시면 됩니다.</p></details><details><summary>사진 상담에서 안내받은 금액이 최종 금액인가요?</summary><p>사진은 사전 확인 자료입니다. 실제 사양과 부품·작동 상태를 검수한 뒤 최종 매입 조건을 안내합니다.</p></details><details><summary>바로 택배로 보내도 되나요?</summary><p>발송 전에 모델과 상태를 상담하고 접수 가능 여부를 확인해 주세요. 침수나 배터리 팽창이 있는 제품은 충전하거나 임의로 발송하지 말고 먼저 상태를 알려주세요.</p></details><details><summary>노트북에 남아 있는 자료는 어떻게 하나요?</summary><p>필요한 파일은 기기를 넘기기 전에 백업해 주세요. 모든 노트북은 매입 후 저장장치를 천공·파쇄하고 작업 사진을 전송해 드립니다. 계정 연결 해제와 자료 백업은 미리 확인해야 합니다.</p></details></section>
 <KeywordGallery pageKey="guide-selling" title="매입방법과 함께 확인할 4가지" keywords={['노트북 모델명 사진 준비','노트북 택배 포장 방법','실물 검수와 매입 금액','자료 백업과 저장장치 처리']} hrefs={['/guide/model','/guide/packing','/guide/price','/guide/privacy']} tags={['매입방법','접수 준비','최종 조건 확인']}/>
 <ContactPanel/>
 </main>}
