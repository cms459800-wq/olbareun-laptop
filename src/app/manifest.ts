import type {MetadataRoute} from 'next';
export default function manifest():MetadataRoute.Manifest{return {name:'올바른 매입',short_name:'올바른 매입',description:'부산 컴퓨터 방문매입 · 본체 사진과 수량 상담',start_url:'/',display:'standalone',background_color:'#ffffff',theme_color:'#315cf6',icons:[{src:'/icons/icon-192.png',sizes:'192x192',type:'image/png'},{src:'/icons/icon-512.png',sizes:'512x512',type:'image/png'}]}}
