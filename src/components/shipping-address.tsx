'use client';

import {useState} from 'react';
import {contactPhone,contactTel,shippingAddress,shippingParcelAddress,shippingPostalCode,shippingRecipient} from '@/contact';

export default function ShippingAddress(){
  const [copyMessage,setCopyMessage]=useState('');
  async function copyAddress(){
    try{
      await navigator.clipboard.writeText(`수취인: ${shippingRecipient}\n(${shippingPostalCode}) ${shippingAddress}`);
      setCopyMessage('택배 주소와 수취인을 복사했습니다.');
    }catch{
      setCopyMessage('복사하지 못했습니다. 위 주소를 길게 눌러 복사해 주세요.');
    }
  }
  return <section className="shipping-address" aria-labelledby="shipping-address-title">
    <div><span className="kicker">DELIVERY ADDRESS</span><h2 id="shipping-address-title">택배 보내실 주소</h2><p>제품을 보내기 전에 전화로 접수 가능 여부와 발송 조건을 먼저 확인해 주세요.</p></div>
    <address><strong>수취인 {shippingRecipient}</strong><span>({shippingPostalCode}) {shippingAddress}</span><small>지번: {shippingParcelAddress}</small></address>
    <div className="shipping-actions"><button type="button" onClick={copyAddress}>주소·수취인 복사</button><a href={contactTel}>발송 전 상담 {contactPhone} ↗</a></div>
    <p className="copy-message" role="status" aria-live="polite">{copyMessage}</p>
  </section>;
}
