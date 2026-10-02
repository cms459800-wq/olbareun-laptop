import Link from 'next/link';
import Image from 'next/image';
import {buyingSteps} from '@/buying-process';

const photos={
 model:{file:'buying-step-01.webp',alt:'노트북 하판 모델명 라벨을 휴대폰으로 촬영하는 모습',position:'50% 50%'},
 consult:{file:'buying-step-02-kakao.webp',alt:'올바른매입 카톡 대화창에 노트북 모델명 사진을 보내는 상담 예시',position:'32% 50%'},
 handover:{file:'buying-step-03-multiple.webp',alt:'액정이 파손된 노트북을 포함한 여러 대의 폐노트북이 택배 상자에 담긴 모습',position:'50% 50%'},
 inspect:{file:'buying-step-04-warehouse.webp',alt:'폐노트북이 쌓인 창고에서 작업자가 노트북 부품을 분리하는 모습',position:'42% 50%'},
 payment:{file:'buying-step-05.webp',alt:'중고 노트북 옆 휴대폰에 입금 확인을 상징하는 표시가 나타난 예시',position:'35% 50%'},
};

export default function BuyingProcess({detailed=false}:{detailed?:boolean}){
 return <ol className={`buying-flow ${detailed?'buying-flow-detail':'buying-flow-summary'}`}>
  {buyingSteps.map((step,i)=><li className="buying-step" key={step.id} id={detailed?`step-${step.id}`:undefined}>
   <div className="buying-photo-slot buying-photo-filled"><Image src={`/uploads/buying/${photos[step.id].file}`} alt={photos[step.id].alt} fill sizes={detailed?'(max-width: 680px) 90vw, 42vw':'(max-width: 680px) 98px, (max-width: 1000px) 30vw, 18vw'} style={{objectPosition:photos[step.id].position}}/></div>
   <div className="buying-step-copy"><span className="buying-step-number">STEP {String(i+1).padStart(2,'0')}</span><h3>{step.title}</h3><p>{detailed?step.description:step.short}</p>
    {detailed?<><ul>{step.checks.map(check=><li key={check}>{check}</li>)}</ul><Link className="buying-step-link" href={step.link}>{step.linkText} <span aria-hidden="true">↗</span></Link></>:<Link className="buying-step-link" href={`/guide/selling#step-${step.id}`}>단계 자세히 보기 <span aria-hidden="true">↗</span></Link>}
   </div>
  </li>)}
 </ol>;
}
