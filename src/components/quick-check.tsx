'use client';

import {useState} from 'react';
import Link from 'next/link';
import {contactPhone,contactTel,contactSms} from '@/contact';

const makers=['삼성','LG','Apple','Lenovo','HP','Dell','ASUS','MSI','기타/모름'];
const symptoms=['정상 작동','전원 불량','액정 파손','침수','배터리 불량','키보드 불량','폐 노트북·부품 누락','기타/모름'];

export default function QuickCheck(){
  const [maker,setMaker]=useState('');
  const [model,setModel]=useState('');
  const [symptom,setSymptom]=useState('');
  const [area,setArea]=useState('');
  const [charger,setCharger]=useState('');
  const [summary,setSummary]=useState('');
  const [copied,setCopied]=useState(false);

  function createSummary(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const details=`[올바른 매입 노트북 상담 정보]\n지역/방식: ${area==='부산'?'부산 현장매입':'전국 택배매입'}\n제조사: ${maker}\n모델명: ${model.trim()||'모름 (하판 라벨 사진 준비)'}\n제품 상태: ${symptom}\n충전기: ${charger||'확인 필요'}\n추가 확인: 기기 사진, 자료 백업 여부`;
    setSummary(details);setCopied(false);
  }
  async function copy(){
    try {await navigator.clipboard.writeText(summary);setCopied(true)}
    catch {setCopied(false)}
  }
  return <div className="quick-check">
    <div className="quick-heading"><span>▤</span><div><strong>내 노트북 정보 정리하기</strong><small>몇 가지만 선택하면 상담용 내용을 만들 수 있어요.</small></div></div>
    <form onSubmit={createSummary} onChange={()=>{setSummary('');setCopied(false)}}>
      <div className="field-pair"><label>거주 지역<select value={area} onChange={e=>setArea(e.target.value)} required><option value="">선택해 주세요</option><option value="부산">부산 · 현장매입</option><option value="전국">부산 외 · 택배매입</option></select></label><label>제조사<select value={maker} onChange={e=>setMaker(e.target.value)} required><option value="">선택해 주세요</option>{makers.map(v=><option key={v}>{v}</option>)}</select></label></div>
      <label>모델명 <span>모르면 비워 두세요</span><input value={model} onChange={e=>setModel(e.target.value)} placeholder="예: LG gram 16Z90R" maxLength={80}/></label>
      <Link className="model-help" href="/guide/model">모델명 확인 방법 보기 ↗</Link>
      <label>제품 상태<select value={symptom} onChange={e=>setSymptom(e.target.value)} required><option value="">선택해 주세요</option>{symptoms.map(v=><option key={v}>{v}</option>)}</select></label>
      <label>충전기 유무 <span>선택 사항</span><select value={charger} onChange={e=>setCharger(e.target.value)}><option value="">모르겠어요</option><option value="있음">있음</option><option value="없음">없음</option></select></label>
      <button className="check-submit" type="submit">상담 정보 만들기 <span>↗</span></button>
    </form>
    {summary&&<div className="summary-box" role="status"><strong>상담할 때 아래 내용을 전달하세요</strong><pre>{summary}</pre><div className="summary-actions"><a href={`${contactSms}?body=${encodeURIComponent(summary)}`}>문자로 상담 내용 보내기 ↗</a><button type="button" onClick={copy}>{copied?'복사했어요 ✓':'내용 복사하기'}</button><a className="summary-phone" href={contactTel}>전화 상담 {contactPhone} ↗</a></div><small>문자 버튼을 누르면 문자 앱에 내용이 채워집니다. 사진은 문자 앱에서 첨부하고 전송해 주세요. 입력 내용은 이 사이트의 서버로 전송하거나 저장하지 않습니다. 매입가를 자동 산정하는 기능은 아닙니다.</small></div>}
  </div>;
}
