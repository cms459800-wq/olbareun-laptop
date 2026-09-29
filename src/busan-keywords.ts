// 지역별 상담 주제를 실제 페이지 내용에 맞춰 구성합니다.
export const busanKeywords:Record<string,{fourth:string;related:string}>={
  jung:{fourth:'사무실 교체 기기 목록 정리',related:'/guide/privacy'},
  seo:{fourth:'오래 보관한 구형 노트북',related:'/condition/old-laptop'},
  dong:{fourth:'업무용 노트북 계정 해제',related:'/guide/privacy'},
  yeongdo:{fourth:'액정 파손 노트북 확인',related:'/condition/broken-screen'},
  busanjin:{fourth:'부전동·전포동 방문 일정',related:'/busan/busanjin#contact'},
  dongnae:{fourth:'삼성·LG 모델명 찾기',related:'/guide/model'},
  nam:{fourth:'학업 자료 백업과 계정 정리',related:'/guide/privacy'},
  buk:{fourth:'전원 불량 기기 상태 확인',related:'/condition/no-power'},
  haeundae:{fourth:'여러 대 사무용 기기 정리',related:'/guide/model'},
  saha:{fourth:'연식 오래된 노트북 확인',related:'/condition/old-laptop'},
  geumjeong:{fourth:'학생용 노트북 자료 정리',related:'/guide/privacy'},
  gangseo:{fourth:'사업장 노트북 수량 확인',related:'/guide/model'},
  yeonje:{fourth:'사무용 기기 자료 백업',related:'/guide/privacy'},
  suyeong:{fourth:'매장 업무용 노트북 상태',related:'/guide/model'},
  sasang:{fourth:'포트·힌지 손상 기기 점검',related:'/condition/broken-screen'},
  gijang:{fourth:'기장읍·정관읍 방문 상담',related:'/busan/gijang#contact'},
};

export function busanGallerySlot(slug:string){
  return [...slug].reduce((sum,char)=>sum+char.charCodeAt(0),0)%3;
}
