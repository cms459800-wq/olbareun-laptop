export type Brand={
  slug:string;name:string;mark:string;logoPath?:string;intro:string;
  model:string;condition:string;account:string;related:string;relatedText:string;
};
export const brands:Brand[]=[
  {
    slug:'samsung',logoPath:'/brands/samsung.svg',name:'삼성 노트북',mark:'S',intro:'갤럭시 북을 포함한 삼성 노트북의 모델명과 상태를 확인해 매입 가능 여부를 상담합니다.',
    model:'노트북 하판의 모델명 라벨을 촬영해 주세요. 전원이 켜진다면 Windows의 시스템 정보에서 모델과 CPU·메모리 사양도 확인할 수 있습니다.',
    condition:'화면 표시, 전원 반응, 키보드와 힌지 상태를 알려주세요. Galaxy Book 등 제품군 이름만으로는 세부 사양을 알기 어려워 정확한 모델명이 도움이 됩니다.',
    account:'삼성 계정과 Windows 계정의 자료를 백업하고 로그아웃 여부를 확인해 주세요.',
    related:'broken-screen',relatedText:'액정 파손 안내',
  },
  {
    slug:'lg',logoPath:'/brands/lg.svg',name:'LG 노트북',mark:'LG',intro:'LG 그램을 포함한 노트북의 모델, 연식, 외관과 작동 상태를 확인해 상담합니다.',
    model:'하판 라벨에 적힌 모델명을 촬영해 주세요. 화면 크기나 그램이라는 이름만으로는 출시 연도와 사양을 구분하기 어렵습니다.',
    condition:'전원이 켜지는지, 배터리 사용과 충전이 되는지, 화면·힌지에 손상이 있는지 확인해 주세요. 충전기 유무도 함께 알려주세요.',
    account:'자료를 백업하고 Windows 계정 및 사용 중인 서비스에서 로그아웃한 뒤 초기화 가능 여부를 확인해 주세요.',
    related:'battery',relatedText:'배터리 불량 안내',
  },
  {
    slug:'macbook',logoPath:'/brands/macbook.svg',name:'맥북',mark:'Mac',intro:'MacBook Air와 MacBook Pro의 모델, 칩, 화면 및 배터리 상태를 확인해 매입을 상담합니다.',
    model:'전원이 켜지면 ‘이 Mac에 관하여’에서 모델과 칩·메모리를 확인해 주세요. 켜지지 않으면 하판의 모델 식별 정보와 외관 사진을 준비해 주세요.',
    condition:'화면, 키보드, 충전 반응과 외관 손상을 알려주세요. 같은 MacBook Air·Pro라도 연식과 칩에 따라 판단 기준이 달라집니다.',
    account:'자료를 백업하고 Apple 계정 로그아웃 및 나의 찾기 해제 가능 여부를 확인해 주세요. 해제가 어렵다면 발송 전에 먼저 알려주세요.',
    related:'no-power',relatedText:'전원 불량 안내',
  },
  {
    slug:'lenovo',logoPath:'/brands/lenovo.svg',name:'레노버 노트북',mark:'L',intro:'ThinkPad와 IdeaPad 등 레노버 노트북의 정확한 모델과 상태를 확인해 상담합니다.',
    model:'하판 라벨의 모델 코드와 제품군 이름을 함께 촬영해 주세요. 같은 제품군에도 화면 크기와 사양이 다른 모델이 있습니다.',
    condition:'전원 반응, 화면, 키보드와 힌지 상태를 알려주세요. 충전기와 저장장치 유무도 확인해 주세요.',
    account:'Windows 계정과 업무용 관리 계정이 연결되어 있다면 자료 백업 및 해제 가능 여부를 먼저 확인해 주세요.',
    related:'keyboard',relatedText:'키보드 고장 안내',
  },
  {
    slug:'hp',logoPath:'/brands/hp.svg',name:'HP 노트북',mark:'HP',intro:'HP 노트북의 모델 코드, 사양과 작동 상태를 확인해 매입 상담을 안내합니다.',
    model:'하판의 모델명과 제품 번호가 보이는 사진을 준비해 주세요. 제품군 이름만으로는 세부 사양을 구분하기 어렵습니다.',
    condition:'전원과 화면, 배터리 사용 여부, 충전 단자 상태를 확인해 주세요. 충전기가 없으면 그 점도 알려주세요.',
    account:'개인 파일을 백업한 다음 Windows 계정과 사용 중인 서비스의 로그아웃 여부를 확인해 주세요.',
    related:'no-power',relatedText:'전원 불량 안내',
  },
  {
    slug:'dell',logoPath:'/brands/dell.svg',name:'델 노트북',mark:'Dell',intro:'Dell 노트북의 모델명과 전원·화면·외관 상태를 확인해 상담합니다.',
    model:'하판의 모델명을 촬영하고, 켜지는 기기라면 시스템 정보의 CPU와 메모리도 함께 확인해 주세요.',
    condition:'전원 표시등, 화면 표시, 키보드와 배터리 상태를 기록해 주세요. 업무용 기기는 관리 상태도 알려주세요.',
    account:'자료 백업과 Windows 계정 로그아웃, 회사 소유 기기라면 처분 권한과 관리 계정 해제 여부를 확인해 주세요.',
    related:'battery',relatedText:'배터리 불량 안내',
  },
  {
    slug:'asus',logoPath:'/brands/asus.svg',name:'ASUS 노트북',mark:'ASUS',intro:'ASUS 일반·게이밍 노트북의 모델과 사양, 고장 상태를 확인해 상담합니다.',
    model:'하판 라벨의 정확한 모델 코드와 CPU·그래픽 사양을 확인해 주세요. 게이밍 모델은 충전기 정보도 도움이 됩니다.',
    condition:'부팅과 화면 표시, 팬 소음, 충전 상태를 구분해 알려주세요. 파손 부위는 사진으로 남겨 주세요.',
    account:'파일을 백업하고 Windows 계정과 연결된 서비스에서 로그아웃할 수 있는지 확인해 주세요.',
    related:'no-power',relatedText:'전원 불량 안내',
  },
  {
    slug:'acer',logoPath:'/brands/acer.svg',name:'에이서 노트북',mark:'Acer',intro:'Acer 노트북의 모델명, 사양과 외관·작동 상태를 확인해 매입 상담을 진행합니다.',
    model:'노트북 하판의 모델 코드와 화면 크기, 켜지는 경우 CPU·메모리 정보를 함께 알려주세요.',
    condition:'전원과 화면, 키보드, 힌지 및 배터리 상태를 살펴보고 충전기 유무를 기록해 주세요.',
    account:'필요한 자료를 백업한 뒤 Windows 계정 및 클라우드 연결을 확인해 주세요.',
    related:'broken-screen',relatedText:'액정 파손 안내',
  },
  {
    slug:'msi',logoPath:'/brands/msi.svg',name:'MSI 노트북',mark:'MSI',intro:'MSI 노트북의 세부 모델과 그래픽 사양, 작동 상태를 확인해 상담합니다.',
    model:'하판 라벨의 모델명과 CPU·GPU·메모리 정보를 준비해 주세요. 같은 제품군에도 구성 차이가 있습니다.',
    condition:'전원 반응과 화면, 팬, 키보드 및 충전기 상태를 구분해 알려주세요. 충전기 출력도 확인하면 좋습니다.',
    account:'저장된 게임·작업 파일을 백업하고 Windows 및 연결된 서비스 계정을 정리해 주세요.',
    related:'keyboard',relatedText:'키보드 고장 안내',
  },
  {
    slug:'surface',logoPath:'/brands/surface.svg',name:'서피스 노트북',mark:'Surface',intro:'Microsoft Surface 계열 노트북의 모델과 화면·배터리 상태를 확인해 상담합니다.',
    model:'기기 뒷면의 모델 식별 정보와 켜지는 경우 시스템 정보를 확인해 주세요. 화면 크기와 키보드 구성도 알려주세요.',
    condition:'충전 반응, 화면과 터치, 키보드 연결 및 배터리 상태를 확인해 주세요. 파손 상태는 사진으로 준비해 주세요.',
    account:'Microsoft 계정과 기기 찾기 연결을 확인하고 필요한 자료를 백업한 뒤 로그아웃 가능 여부를 알려주세요.',
    related:'broken-screen',relatedText:'액정 파손 안내',
  },
];
