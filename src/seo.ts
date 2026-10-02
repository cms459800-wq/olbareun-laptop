import type {Metadata} from 'next';
import {siteUrl} from '@/site';
import {searchMetadata} from '@/search-metadata';

// Keep canonical and social metadata aligned with each page's own content.
export function pageMetadata(meta:Metadata):Metadata{
  const path=String(meta.alternates?.canonical||'/');
  const copy=searchMetadata[path];
  const title=copy?.title||(typeof meta.title==='string'?meta.title:'올바른 매입');
  const description=copy?.description||meta.description||'';
  const url=new URL(path,siteUrl).toString();
  return {...meta,title,description,openGraph:{type:'website',locale:'ko_KR',siteName:'올바른 매입',title:`${title} | 올바른 매입`,description,url,images:[{url:'/uploads/social-preview.jpg',width:1200,height:630,alt:'올바른 매입 고장난 노트북 매입 · 부산 현장매입 전국 택배매입'}]},twitter:{card:'summary_large_image',title:`${title} | 올바른 매입`,description,images:['/uploads/social-preview.jpg']}};
}
