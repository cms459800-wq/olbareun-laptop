import {contactPhone,contactTel,shippingAddress,shippingParcelAddress,shippingPostalCode,shippingRecipient} from '@/contact';

export default function ShippingAddress(){
  return <section className="shipping-address" aria-labelledby="shipping-address-title">
    <div><span className="kicker">DELIVERY ADDRESS</span><h2 id="shipping-address-title">택배 보내실 주소</h2><p>제품을 보내기 전에 전화로 접수 가능 여부와 발송 조건을 먼저 확인해 주세요.</p></div>
    <address><strong>수취인 {shippingRecipient}</strong><span>({shippingPostalCode}) {shippingAddress}</span><small>지번: {shippingParcelAddress}</small></address>
    <a href={contactTel}>발송 전 상담 {contactPhone} ↗</a>
  </section>;
}
