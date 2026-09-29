export const brands=[
  {
    slug:'samsung',name:'삼성 노트북',mark:'S',intro:'갤럭시 북을 포함한 삼성 노트북의 모델명과 상태를 확인해 매입 가능 여부를 상담합니다.',
    model:'노트북 하판의 모델명 라벨을 촬영해 주세요. 전원이 켜진다면 Windows의 시스템 정보에서 모델과 CPU·메모리 사양도 확인할 수 있습니다.',
    condition:'화면 표시, 전원 반응, 키보드와 힌지 상태를 알려주세요. Galaxy Book 등 제품군 이름만으로는 세부 사양을 알기 어려워 정확한 모델명이 도움이 됩니다.',
    account:'삼성 계정과 Windows 계정의 자료를 백업하고 로그아웃 여부를 확인해 주세요.',
    related:'broken-screen',relatedText:'액정 파손 안내',
  },
  {
    slug:'lg',name:'LG 노트북',mark:'LG',intro:'LG 그램을 포함한 노트북의 모델, 연식, 외관과 작동 상태를 확인해 상담합니다.',
    model:'하판 라벨에 적힌 모델명을 촬영해 주세요. 화면 크기나 그램이라는 이름만으로는 출시 연도와 사양을 구분하기 어렵습니다.',
    condition:'전원이 켜지는지, 배터리 사용과 충전이 되는지, 화면·힌지에 손상이 있는지 확인해 주세요. 충전기 유무도 함께 알려주세요.',
    account:'자료를 백업하고 Windows 계정 및 사용 중인 서비스에서 로그아웃한 뒤 초기화 가능 여부를 확인해 주세요.',
    related:'battery',relatedText:'배터리 불량 안내',
  },
  {
    slug:'macbook',name:'맥북',mark:'Mac',intro:'MacBook Air와 MacBook Pro의 모델, 칩, 화면 및 배터리 상태를 확인해 매입을 상담합니다.',
    model:'전원이 켜지면 ‘이 Mac에 관하여’에서 모델과 칩·메모리를 확인해 주세요. 켜지지 않으면 하판의 모델 식별 정보와 외관 사진을 준비해 주세요.',
    condition:'화면, 키보드, 충전 반응과 외관 손상을 알려주세요. 같은 MacBook Air·Pro라도 연식과 칩에 따라 판단 기준이 달라집니다.',
    account:'자료를 백업하고 Apple 계정 로그아웃 및 나의 찾기 해제 가능 여부를 확인해 주세요. 해제가 어렵다면 발송 전에 먼저 알려주세요.',
    related:'no-power',relatedText:'전원 불량 안내',
  },
] as const;
