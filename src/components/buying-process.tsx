import Link from 'next/link';
import AppIcon from '@/components/app-icon';
import {buyingSteps} from '@/buying-process';

export default function BuyingProcess({detailed=false}:{detailed?:boolean}){
 return <ol className={`buying-flow ${detailed?'buying-flow-detail':'buying-flow-summary'}`}>
  {buyingSteps.map((step,i)=><li className="buying-step" key={step.id} id={detailed?`step-${step.id}`:undefined}>
   <div className="buying-photo-slot" role="img" aria-label={`${step.photo} 사진 자리`}><AppIcon name={step.icon} size={detailed?42:30}/><span>{step.photo}</span><small>사진 준비 중</small></div>
   <div className="buying-step-copy"><span className="buying-step-number">STEP {String(i+1).padStart(2,'0')}</span><h3>{step.title}</h3><p>{detailed?step.description:step.short}</p>
    {detailed?<><ul>{step.checks.map(check=><li key={check}>{check}</li>)}</ul><Link className="buying-step-link" href={step.link}>{step.linkText} <span aria-hidden="true">↗</span></Link></>:<Link className="buying-step-link" href={`/guide/selling#step-${step.id}`}>단계 자세히 보기 <span aria-hidden="true">↗</span></Link>}
   </div>
  </li>)}
 </ol>;
}
