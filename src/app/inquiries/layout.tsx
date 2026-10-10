import type {Metadata} from 'next';
export const metadata:Metadata={title:'비밀 매입문의',description:'컴퓨터 사양과 수량, 상태를 비밀글로 문의하고 접수번호와 비밀번호로 답변을 확인하세요.',robots:{index:false,follow:true}};
export default function Layout({children}:{children:React.ReactNode}){return children;}
