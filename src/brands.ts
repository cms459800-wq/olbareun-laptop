export type Brand={
  slug:string;name:string;mark:string;logoPath?:string;intro:string;
  model:string;condition:string;account:string;related:string;relatedText:string;
};
export const brands:Brand[]=[
  {
    "slug": "samsung",
    "name": "삼성 컴퓨터",
    "mark": "삼성",
    "logoPath": "/brands/samsung.svg",
    "intro": "삼성 데스크톱·일체형 PC의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "삼성 데스크톱·일체형 PC 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "boot-failure",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "lg",
    "name": "LG 컴퓨터",
    "mark": "LG",
    "logoPath": "/brands/lg.svg",
    "intro": "LG 데스크톱·일체형 PC의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "LG 데스크톱·일체형 PC 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "storage",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "apple",
    "name": "애플 컴퓨터",
    "mark": "애플",
    "logoPath": "/brands/macbook.svg",
    "intro": "iMac·Mac mini·Mac Studio·Mac Pro의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "전원이 켜지면 ‘이 Mac에 관하여’에서 모델·칩·메모리를 확인하세요. 켜지지 않으면 본체 라벨과 외관 사진을 준비하세요.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Apple 계정·나의 찾기·활성화 잠금 해제 여부를 확인하세요. 회사 소유 기기는 처분 권한과 관리 등록도 확인합니다.",
    "related": "no-power",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "lenovo",
    "name": "레노버 컴퓨터",
    "mark": "레노버",
    "logoPath": "/brands/lenovo.svg",
    "intro": "ThinkCentre·IdeaCentre의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "ThinkCentre·IdeaCentre 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "graphics",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "hp",
    "name": "HP 컴퓨터",
    "mark": "HP",
    "logoPath": "/brands/hp.svg",
    "intro": "HP 데스크톱·일체형 PC의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "HP 데스크톱·일체형 PC 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "no-power",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "dell",
    "name": "델 컴퓨터",
    "mark": "델",
    "logoPath": "/brands/dell.svg",
    "intro": "Dell OptiPlex·Precision의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "Dell OptiPlex·Precision 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "storage",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "asus",
    "name": "ASUS 컴퓨터",
    "mark": "ASUS",
    "logoPath": "/brands/asus.svg",
    "intro": "ASUS 데스크톱·게이밍 PC의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "ASUS 데스크톱·게이밍 PC 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "no-power",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "acer",
    "name": "에이서 컴퓨터",
    "mark": "에이서",
    "logoPath": "/brands/acer.svg",
    "intro": "Acer 데스크톱·일체형 PC의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "Acer 데스크톱·일체형 PC 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "boot-failure",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "msi",
    "name": "MSI 컴퓨터",
    "mark": "MSI",
    "logoPath": "/brands/msi.svg",
    "intro": "MSI 데스크톱·게이밍 PC의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "MSI 데스크톱·게이밍 PC 본체 측면·뒷면의 모델명과 제품 식별 라벨을 촬영하세요. 켜지는 기기는 시스템 정보에서 CPU·메모리 사양도 확인할 수 있습니다.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "graphics",
    "relatedText": "고장 상태별 준비 안내"
  },
  {
    "slug": "custom-pc",
    "name": "조립 컴퓨터",
    "mark": "PC",
    "intro": "CPU·메인보드·그래픽카드 구성의 모델과 사양, 작동 상태를 확인해 중고·고장 컴퓨터 매입을 상담합니다.",
    "model": "조립 PC는 제조사 모델명이 없을 수 있습니다. 알고 있는 CPU·메모리·그래픽카드·저장장치 정보를 적고 본체 사진을 준비하세요.",
    "condition": "전원과 부팅 반응, 화면 출력, 팬 소음, 본체 외관 및 부품 누락 여부를 구분해 알려주세요. 일체형 PC는 화면 손상도 함께 전달하세요.",
    "account": "필요한 자료를 백업하고 Windows·클라우드 계정과 회사 관리 등록을 정리하세요. 회사 소유 기기는 처분 권한을 확인한 뒤 접수합니다.",
    "related": "storage",
    "relatedText": "고장 상태별 준비 안내"
  }
];
