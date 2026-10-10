export const regionKeywords:Record<string,{fourth:string;related:string}>={
  seoul:{fourth:'여러 대 업무용 기기 발송',related:'/regions/seoul/gangnam'},
  gyeonggi:{fourth:'게이밍 컴퓨터 사양 확인',related:'/regions/gyeonggi/suwon'},
  incheon:{fourth:'오래 보관한 애플 컴퓨터 계정 확인',related:'/regions/incheon/yeonsu'},
  daegu:{fourth:'오류 화면 보호 포장',related:'/condition/boot-failure'},
  daejeon:{fourth:'학업용 기기 자료 백업',related:'/guide/privacy'},
  gwangju:{fourth:'부팅·화면 증상 구분',related:'/condition/no-power'},
  ulsan:{fourth:'사업장 기기 수량 정리',related:'/guide/model'},
  gyeongnam:{fourth:'부산 인접 지역 택배 접수',related:'/guide/packing'},
  gyeongbuk:{fourth:'컴퓨터 본체·전원 케이블 분리 포장',related:'/guide/packing'},
  jeonbuk:{fourth:'중고 컴퓨터 저장장치 상태',related:'/condition/storage'},
  jeonnam:{fourth:'전원 불량 모델명 찾기',related:'/guide/model'},
  chungbuk:{fourth:'사진 상담과 실물 검수',related:'/guide/price'},
  chungnam:{fourth:'SSD와 개인정보 처리',related:'/guide/privacy'},
  gangwon:{fourth:'장거리 발송 완충 포장',related:'/guide/packing'},
  jeju:{fourth:'제주 지역 발송 조건 확인',related:'/regions/jeju#contact'},
};

export function regionGallerySlot(key:string){
  return [...key].reduce((sum,char)=>sum+char.charCodeAt(0),0)%3;
}
