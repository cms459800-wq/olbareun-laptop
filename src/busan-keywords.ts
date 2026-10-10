// 지역별 상담 주제를 실제 페이지 내용에 맞춰 구성합니다.
export const busanKeywords:Record<string,{fourth:string;related:string}>={
  jung:{fourth:'사무실 교체 기기 목록 정리',related:'/guide/privacy'},
  seo:{fourth:'오래 보관한 구형 컴퓨터',related:'/condition/old-computer'},
  dong:{fourth:'업무용 컴퓨터 계정 해제',related:'/guide/privacy'},
  yeongdo:{fourth:'부팅 불량 컴퓨터 확인',related:'/condition/boot-failure'},
  busanjin:{fourth:'부전동·전포동 방문 일정',related:'/busan/busanjin#contact'},
  dongnae:{fourth:'삼성·LG 모델명 찾기',related:'/guide/model'},
  nam:{fourth:'학업 자료 백업과 계정 정리',related:'/guide/privacy'},
  buk:{fourth:'전원 불량 기기 상태 확인',related:'/condition/no-power'},
  haeundae:{fourth:'여러 대 사무용 기기 정리',related:'/guide/model'},
  saha:{fourth:'연식 오래된 컴퓨터 확인',related:'/condition/old-computer'},
  geumjeong:{fourth:'학생용 컴퓨터 자료 정리',related:'/guide/privacy'},
  gangseo:{fourth:'사업장 컴퓨터 수량 확인',related:'/guide/model'},
  yeonje:{fourth:'사무용 기기 자료 백업',related:'/guide/privacy'},
  suyeong:{fourth:'매장 업무용 컴퓨터 상태',related:'/guide/model'},
  sasang:{fourth:'포트·케이스 손상 기기 점검',related:'/condition/boot-failure'},
  gijang:{fourth:'기장읍·정관읍 방문 상담',related:'/busan/gijang#contact'},
};

export function busanGallerySlot(slug:string){
  return [...slug].reduce((sum,char)=>sum+char.charCodeAt(0),0)%3;
}
