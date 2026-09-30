'use client';
import {useState} from 'react';

const address='부산광역시 부산진구\n백양대로252번길 14\n(개금동) 1층 올바른 매입\nT.010-6648-4886';

export default function CopyShippingAddress(){
  const [status,setStatus]=useState<'idle'|'copied'|'error'>('idle');
  async function copy(){
    try{
      await navigator.clipboard.writeText(address);
      setStatus('copied');
    }catch{
      setStatus('error');
    }
  }
  return <div className="address-copy"><button type="button" onClick={copy}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>{status==='copied'?'주소 복사 완료':'주소 복사하기'}</button><span role="status">{status==='copied'?'주소와 연락처를 복사했습니다.':status==='error'?'복사하지 못했습니다. 위 주소를 선택해 복사해 주세요.':''}</span></div>
}
