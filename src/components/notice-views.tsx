'use client';
import {useEffect,useState} from 'react';
export default function NoticeViews({id,initial}:{id:string;initial:number}){const [count,setCount]=useState(initial);useEffect(()=>{let active=true;fetch(`/api/board/notices/${id}/view`,{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'}).then(r=>r.ok?r.json():null).then(d=>{if(active&&d)setCount(d.views);}).catch(()=>{});return()=>{active=false;};},[id]);return <span>조회 {count.toLocaleString()}</span>;}
