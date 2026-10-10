export const conditionKeywords:Record<string,{focus:string;related:string}>={
  'no-power':{focus:'전원 표시등과 팬 반응',related:'/guide/model'},
  'boot-failure':{focus:'부팅 실패와 오류 화면 기록',related:'/guide/visit'},
  'water-damage':{focus:'침수 후 전원 사용 주의',related:'/guide/visit'},
  storage:{focus:'SSD·하드디스크 인식 상태',related:'/guide/price'},
  graphics:{focus:'그래픽카드 모델과 화면 출력',related:'/guide/price'},
  'old-computer':{focus:'구형 기기 모델명 찾기',related:'/guide/model'},
  'scrap-computer':{focus:'SSD·RAM 등 부품 누락 확인',related:'/guide/privacy'},
};

export const brandKeywords:Record<string,string>={
  samsung:'삼성 본체 세부 모델 확인',
  lg:'LG 본체 모델과 저장장치 상태',
  apple:'애플 컴퓨터 칩과 활성화 잠금 확인',
  lenovo:'ThinkCentre·IdeaCentre 세부 모델 확인',
  hp:'HP 모델 코드와 전원 공급 상태',
  dell:'Dell 기기 사양과 관리 계정',
  asus:'ASUS 그래픽 사양과 전원 상태',
  acer:'Acer 모델명과 케이스 상태',
  msi:'MSI 그래픽 사양과 전원 케이블',
  'custom-pc':'조립 PC CPU·메모리·그래픽 구성',
};

export function detailGallerySlot(key:string){
  return [...key].reduce((sum,char)=>sum+char.charCodeAt(0),0)%3;
}
