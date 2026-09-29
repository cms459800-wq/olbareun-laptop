import Link from 'next/link';

type KeywordGalleryProps={
  pageKey:string;
  title:string;
  keywords:[string,string,string,string];
  hrefs:[string,string,string,string];
  tags?:string[];
};

export default function KeywordGallery({pageKey,title,keywords,hrefs,tags=[]}:KeywordGalleryProps){
  const seed=[...pageKey].reduce((value,char)=>value*31+char.charCodeAt(0),0)>>>0;
  const order=[0,1,2,3].map((_,index)=>(index+seed%4)%4);
  return <section className="keyword-gallery" aria-label={title}>
    <div className="section-head"><span className="kicker">LAPTOP GUIDE</span><h2>{title}</h2><p>궁금한 주제를 골라 상담 전에 확인해 보세요.</p></div>
    <div className="keyword-grid">
      {keywords.map((keyword,index)=><Link href={hrefs[index]} className={`keyword-card keyword-art-${order[index]}`} key={keyword} aria-label={`${keyword} 안내 보기`}>
        <div className="keyword-picture" role="img" aria-label={`${keyword} 노트북 안내 이미지`}>
          <svg viewBox="0 0 320 230" aria-hidden="true" focusable="false">
            <circle cx="270" cy="52" r="75" fill="currentColor" opacity=".12"/>
            <circle cx="43" cy="197" r="86" fill="currentColor" opacity=".1"/>
            <path d="M67 56h186a11 11 0 0 1 11 11v119H56V67a11 11 0 0 1 11-11Z" fill="#24334e"/>
            <rect x="65" y="65" width="190" height="111" rx="3" fill="#dceafa"/>
            <path d="M66 176h188L286 199a9 9 0 0 1-8 14H42a9 9 0 0 1-8-14l32-23Z" fill="#a8b9ce"/>
            <path d="M127 188h66l6 10h-78l6-10Z" fill="#788da9"/>
            <rect x="91" y="83" width="92" height="8" rx="4" fill="currentColor" opacity=".44"/>
            <rect x="91" y="101" width="130" height="8" rx="4" fill="currentColor" opacity=".3"/>
            <rect x="91" y="119" width="108" height="8" rx="4" fill="currentColor" opacity=".24"/>
            <circle cx="221" cy="143" r="20" fill="currentColor" opacity=".7"/>
            <path d="m212 143 6 6 12-14" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <strong>{keyword}</strong>
        </div>
        <div className="keyword-caption"><b>{keyword} <span className="keyword-arrow" aria-hidden="true">↗</span></b><div>{(tags.length?tags:[title,'모델 확인','상태 확인']).slice(0,3).map(tag=><span key={tag}>#{tag}</span>)}</div></div>
      </Link>)}
    </div>
  </section>;
}
