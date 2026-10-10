export type Area = { slug: string; name: string; districts: string; focus: string; detail: string };
export const busan: Area[] = [
  {slug:'jung',name:'중구',districts:'중앙동 · 남포동 · 보수동',focus:'사무실 교체 컴퓨터',detail:'사무실에서 교체한 여러 대의 컴퓨터는 모델별 사진과 수량을 함께 알려주세요.'},
  {slug:'seo',name:'서구',districts:'동대신동 · 서대신동 · 암남동',focus:'오래된 컴퓨터 정리',detail:'보관 중인 구형 컴퓨터도 모델명과 전원 상태를 확인하면 상담이 수월합니다.'},
  {slug:'dong',name:'동구',districts:'초량동 · 수정동 · 범일동',focus:'업무용 컴퓨터',detail:'업무용 기기는 계정 해제와 자료 백업을 마친 뒤 기기 상태를 알려주세요.'},
  {slug:'yeongdo',name:'영도구',districts:'청학동 · 동삼동 · 봉래동',focus:'파손 컴퓨터',detail:'그래픽 출력이나 외관이 파손되었어도 모델과 손상 부위 사진으로 상담할 수 있습니다.'},
  {slug:'busanjin',name:'부산진구',districts:'부전동 · 전포동 · 개금동',focus:'교체 후 남은 컴퓨터',detail:'새 기기로 교체했다면 기존 컴퓨터의 전원 케이블 유무와 작동 상태를 확인해 주세요.'},
  {slug:'dongnae',name:'동래구',districts:'온천동 · 사직동 · 명륜동',focus:'가정용 컴퓨터',detail:'집에 보관하던 삼성·LG 등 컴퓨터는 본체 측면·뒷면 모델명 사진이 있으면 확인이 빠릅니다.'},
  {slug:'nam',name:'남구',districts:'대연동 · 용호동 · 문현동',focus:'학업용 컴퓨터',detail:'학업용 컴퓨터는 저장장치와 저장장치 상태를 함께 알려주시면 좋습니다.'},
  {slug:'buk',name:'북구',districts:'덕천동 · 화명동 · 만덕동',focus:'전원 불량 컴퓨터',detail:'전원이 켜지지 않는 경우 전원 케이블 연결 시 표시등 반응을 확인해 주세요.'},
  {slug:'haeundae',name:'해운대구',districts:'우동 · 좌동 · 재송동 · 송정동',focus:'업무용·개인 컴퓨터',detail:'센텀 일대 사무용 기기와 가정에서 사용하던 개인 컴퓨터를 모델과 상태에 따라 상담합니다.'},
  {slug:'saha',name:'사하구',districts:'하단동 · 괴정동 · 다대동',focus:'오래된 컴퓨터',detail:'연식이 오래된 기기도 사양과 작동 상태에 따라 매입 가능 여부를 확인합니다.'},
  {slug:'geumjeong',name:'금정구',districts:'장전동 · 구서동 · 부곡동',focus:'학생용 컴퓨터',detail:'졸업이나 교체로 쓰지 않는 컴퓨터는 구성품과 계정 해제 여부를 알려주세요.'},
  {slug:'gangseo',name:'강서구',districts:'명지동 · 녹산동 · 대저동',focus:'사업장 컴퓨터',detail:'사업장에서 사용하던 복수 기기는 수량과 모델 목록을 정리해 주시면 상담에 도움이 됩니다.'},
  {slug:'yeonje',name:'연제구',districts:'연산동 · 거제동',focus:'사무용 컴퓨터',detail:'사무용 기기 정리 시 저장된 업무 자료를 먼저 백업하고 계정을 해제해 주세요.'},
  {slug:'suyeong',name:'수영구',districts:'광안동 · 남천동 · 민락동 · 망미동',focus:'개인·매장 컴퓨터',detail:'개인용이나 매장 업무용 컴퓨터는 사용 환경과 고장 증상을 함께 알려주세요.'},
  {slug:'sasang',name:'사상구',districts:'괘법동 · 주례동 · 모라동',focus:'현장 업무용 컴퓨터',detail:'현장에서 사용한 기기는 외관·포트·케이스 손상을 사진으로 보여주시면 좋습니다.'},
  {slug:'gijang',name:'기장군',districts:'기장읍 · 정관읍 · 일광읍',focus:'방문 일정 상담',detail:'방문 가능 일정은 위치와 기기 수량을 확인한 후 개별 안내합니다.'},
];
export const shipping: Area[] = [
  {slug:'seoul',name:'서울',districts:'강남 · 송파 · 마포 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'gyeonggi',name:'경기',districts:'수원 · 성남 · 용인 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'incheon',name:'인천',districts:'부평 · 남동 · 연수 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'daegu',name:'대구',districts:'수성 · 달서 · 북구 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'daejeon',name:'대전',districts:'유성 · 서구 · 중구 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'gwangju',name:'광주',districts:'북구 · 서구 · 광산구 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'ulsan',name:'울산',districts:'남구 · 중구 · 북구 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'gyeongnam',name:'경남',districts:'창원 · 김해 · 양산 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'gyeongbuk',name:'경북',districts:'포항 · 구미 · 경주 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'jeonbuk',name:'전북',districts:'전주 · 익산 · 군산 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'jeonnam',name:'전남',districts:'목포 · 순천 · 여수 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'chungbuk',name:'충북',districts:'청주 · 충주 · 제천 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'chungnam',name:'충남',districts:'천안 · 아산 · 서산 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'gangwon',name:'강원',districts:'춘천 · 원주 · 강릉 등',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
  {slug:'jeju',name:'제주',districts:'제주시 · 서귀포시',focus:'컴퓨터 정리 전 사진·사양 준비',detail:'현재 부산 방문매입 중심으로 운영합니다. 부산 외 지역은 위치와 본체 수량·사양을 전달하고 방문 가능 여부를 별도로 문의하세요.'},
];
export const conditions = [
  {
    "icon": "⚡",
    "title": "전원 불량",
    "text": "전원이 켜지지 않아요",
    "slug": "no-power"
  },
  {
    "icon": "▣",
    "title": "부팅 불량",
    "text": "화면이 안 나오거나 부팅이 멈춰요",
    "slug": "boot-failure"
  },
  {
    "icon": "💧",
    "title": "침수 컴퓨터",
    "text": "본체에 물·커피가 들어갔어요",
    "slug": "water-damage"
  },
  {
    "icon": "▤",
    "title": "저장장치 불량",
    "text": "SSD·하드디스크 인식 문제",
    "slug": "storage"
  },
  {
    "icon": "▣",
    "title": "그래픽카드 고장",
    "text": "화면 깨짐·출력 이상",
    "slug": "graphics"
  },
  {
    "icon": "⌁",
    "title": "오래된 컴퓨터",
    "text": "교체 후 보관 중인 본체",
    "slug": "old-computer"
  },
  {
    "icon": "♻",
    "title": "폐 컴퓨터",
    "text": "작동 불가·부품 누락 본체",
    "slug": "scrap-computer"
  }
];
