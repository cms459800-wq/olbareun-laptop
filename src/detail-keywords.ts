export const conditionKeywords:Record<string,{focus:string;related:string}>={
  'no-power':{focus:'충전 표시등과 팬 반응',related:'/guide/model'},
  'broken-screen':{focus:'깨진 화면의 보호 포장',related:'/guide/packing'},
  'water-damage':{focus:'침수 후 전원 사용 주의',related:'/guide/packing'},
  battery:{focus:'충전기와 배터리 상태',related:'/guide/price'},
  keyboard:{focus:'입력되지 않는 키 기록',related:'/guide/price'},
  'old-laptop':{focus:'구형 기기 모델명 찾기',related:'/guide/model'},
  'scrap-laptop':{focus:'SSD·RAM 등 부품 누락 확인',related:'/guide/privacy'},
};

export const brandKeywords:Record<string,string>={
  samsung:'갤럭시 북 세부 모델 확인',
  lg:'LG 그램 연식과 배터리 상태',
  macbook:'맥북 칩과 활성화 잠금 확인',
};

export function detailGallerySlot(key:string){
  return [...key].reduce((sum,char)=>sum+char.charCodeAt(0),0)%3;
}
