export const regionKeywords:Record<string,{fourth:string;related:string}>={
  seoul:{fourth:'방문 가능 여부 별도 상담',related:'/regions/seoul/gangnam'},
  gyeonggi:{fourth:'방문 가능 여부 별도 상담',related:'/regions/gyeonggi/suwon'},
  incheon:{fourth:'방문 가능 여부 별도 상담',related:'/regions/incheon/yeonsu'},
  daegu:{fourth:'방문 가능 여부 별도 상담',related:'/condition/boot-failure'},
  daejeon:{fourth:'방문 가능 여부 별도 상담',related:'/guide/privacy'},
  gwangju:{fourth:'방문 가능 여부 별도 상담',related:'/condition/no-power'},
  ulsan:{fourth:'방문 가능 여부 별도 상담',related:'/guide/model'},
  gyeongnam:{fourth:'방문 가능 여부 별도 상담',related:'/guide/visit'},
  gyeongbuk:{fourth:'방문 가능 여부 별도 상담',related:'/guide/visit'},
  jeonbuk:{fourth:'방문 가능 여부 별도 상담',related:'/condition/storage'},
  jeonnam:{fourth:'방문 가능 여부 별도 상담',related:'/guide/model'},
  chungbuk:{fourth:'방문 가능 여부 별도 상담',related:'/guide/price'},
  chungnam:{fourth:'방문 가능 여부 별도 상담',related:'/guide/privacy'},
  gangwon:{fourth:'방문 가능 여부 별도 상담',related:'/guide/visit'},
  jeju:{fourth:'방문 가능 여부 별도 상담',related:'/regions/jeju#contact'},
};

export function regionGallerySlot(key:string){
  return [...key].reduce((sum,char)=>sum+char.charCodeAt(0),0)%3;
}
