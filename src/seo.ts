import type {Metadata} from 'next';
import {siteUrl} from '@/site';

// Keep canonical and social metadata aligned with each page's own content.
export function pageMetadata(meta:Metadata):Metadata{
  const title=typeof meta.title==='string'?meta.title:'올바른 매입';
  const description=meta.description||'';
  const path=String(meta.alternates?.canonical||'/');
  const url=new URL(path,siteUrl).toString();
  return {...meta,openGraph:{type:'website',locale:'ko_KR',siteName:'올바른 매입',title:`${title} | 올바른 매입`,description,url},twitter:{card:'summary',title:`${title} | 올바른 매입`,description}};
}
