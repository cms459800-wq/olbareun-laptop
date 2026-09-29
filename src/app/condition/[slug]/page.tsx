import KeywordGallery from '@/components/keyword-gallery';
import {conditionKeywords,detailGallerySlot} from '@/detail-keywords';
import Link from 'next/link';import {notFound} from 'next/navigation';import type {Metadata} from 'next';import {conditions} from '@/data';
const guidance:Record<string,{check:string;tip:string}>={
 'no-power':{check:'충전기를 연결했을 때 표시등이나 팬 반응이 있는지 확인해 주세요.',tip:'전원이 켜지지 않아도 하판의 모델명 라벨과 외관 사진으로 제품을 식별할 수 있습니다.'},
 'broken-screen':{check:'화면의 깨진 부위, 줄감, 외부 모니터 연결 여부를 기록해 주세요.',tip:'화면이 보이지 않아도 전원 반응과 정확한 모델명이 매입 판단에 도움이 됩니다.'},
 'water-damage':{check:'침수 시점과 액체 종류, 침수 후 전원 사용 여부를 알려주세요.',tip:'추가 손상을 막기 위해 전원을 켜거나 충전기를 연결하지 마세요.'},
 'battery':{check:'충전 표시와 전원 케이블 분리 시 사용 가능 여부를 확인해 주세요.',tip:'배터리 문제 외에 기기가 정상 작동하는지도 알려주시면 좋습니다.'},
 'keyboard':{check:'입력이 되지 않는 키와 액체 유입 여부를 정리해 주세요.',tip:'특정 키만 문제인지 전체 입력이 어려운지 구분하면 상담에 도움이 됩니다.'},
 'old-laptop':{check:'하판 라벨의 모델명, 대략적인 사용 연식, 전원 상태를 확인해 주세요.',tip:'오래된 기기도 사양과 부품 상태에 따라 매입 가능 여부가 달라집니다.'},
 'scrap-laptop':{check:'본체가 남아 있는지, SSD·RAM·배터리·충전기 등 빠진 부품이 있는지 알려주세요.',tip:'작동하지 않아도 모델과 남아 있는 부품 상태에 따라 매입 가능 여부를 확인할 수 있습니다. 배터리가 부풀었거나 기기가 손상됐다면 발송 전에 상태를 먼저 알려주세요.'},
};
export function generateStaticParams(){return conditions.map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const c=conditions.find(x=>x.slug===slug);const subject=c?(c.title.includes('노트북')?c.title:`${c.title} 노트북`):'';return {alternates:{canonical:`/condition/${slug}`},title:c?`${subject} 매입 안내`:'고장 유형 안내',description:c?`${subject}의 상태 확인 방법과 부산 현장매입·전국 택배매입 절차를 안내합니다.`:''}}
export default async function Condition({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=conditions.find(x=>x.slug===slug);if(!c)notFound();const g=guidance[slug];
const {focus,related}=conditionKeywords[slug];
const slot=detailGallerySlot(`condition-${slug}`);
const gallery=<KeywordGallery pageKey={`condition-${slug}`} title={`${c.title} 노트북 매입 전 확인`} description="현재 증상과 모델 정보를 정리하면 상담에 도움이 됩니다." keywords={[`${c.title} 노트북 매입 상담`,`${c.title} 증상 사진 준비`,`${c.title} 모델명 확인`,focus]} hrefs={['/#estimate','#check','/guide/model',related]} tags={[c.title,'상태 확인','매입 상담']}/>;
return <main className="shell inner-page"><div className="breadcrumbs"><Link href="/">홈</Link> / 고장 유형 / {c.title}</div><div className="inner-hero"><span className="kicker">LAPTOP CONDITION</span><h1>{c.icon} {c.title}<br/><em>매입 안내</em></h1><p>고장 증상만으로 가치를 단정할 수 없습니다. 모델, 연식, 외관과 내부 상태를 종합해 매입 가능 여부를 확인합니다.</p></div>{slot===0&&gallery}<div className="detail-grid" id="check"><article className="detail-card"><span className="feature-icon">⌕</span><h2>먼저 확인할 내용</h2><p>{g.check}</p><p>{g.tip}</p></article><article className="detail-card"><span className="feature-icon">▤</span><h2>준비하면 좋은 정보</h2><ol><li>제조사와 모델명</li><li>기기 전체와 고장 부위 사진</li><li>증상이 시작된 시점과 충전기 유무</li><li>자료 백업 및 계정 로그아웃 여부</li></ol></article></div>{slug==='scrap-laptop'&&<div className="detail-grid"><article className="detail-card"><h2>모델명을 모르겠다면</h2><p>하판 라벨과 본체 앞뒤 사진을 준비해 주세요. 라벨이 없으면 로고와 포트 위치가 보이는 사진도 모델 확인에 도움이 됩니다.</p></article><article className="detail-card"><h2>저장된 자료가 걱정된다면</h2><p>가능하면 먼저 자료를 백업하고 계정을 해제해 주세요. 전원이 켜지지 않아 직접 삭제할 수 없다면 저장장치의 유무와 자료 처리 방법을 상담에서 확인한 뒤 접수하세요.</p></article></div>}{slot===1&&gallery}<div className="notice-box"><strong>매입 금액 안내</strong><p>정확한 금액은 제품의 모델·사양·실물 상태를 확인한 뒤 안내합니다. 고장 원인이나 매입 가능 여부를 보장하지 않습니다.</p></div>{slot===2&&gallery}<div className="inline-links"><Link href="/busan">부산 현장매입 ↗</Link><Link href="/regions">전국 택배매입 ↗</Link></div></main>}
