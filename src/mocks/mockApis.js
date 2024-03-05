// GiftShop
export const products = {
  success: true,
  response: [
    {
      productId: 1,
      productName: "닌텐도 스위치 OLED모델",
      productPrice: 409540,
      productImage: "/assets/products/nintendo.png",
    },
    {
      productId: 2,
      productName: "HHKB Studio 해피해킹 스튜디오 영어배열 PD-ID100B",
      productPrice: 454000,
      productImage: "/assets/products/keyboard.png",
    },
  ],
  error: null,
};

// 상품 상세 페이지
export const products_id = {
  success: true,
  response: [
    {
      productId: 1,
      productName: "닌텐도 스위치 OLED모델",
      productPrice: 409540,
      productImage: "/images/1.jpg",
      productDescription:
        "본 제품은 닌텐도 정품이며, 전자제품 특성상 포장훼손 및 개봉 시 변심 반품이 불가하므로 구매시 유의 바랍니다.",
    },
  ],
  error: null,
};

// 찜하기
export const wishlists = {
  success: true,
  response: null,
  error: null,
};

// 찜하기 취소
export const wishlist_id = {
  success: true,
  response: null,
  error: null,
};

// 펀딩 등록
export const fundings = {
  success: true,
  response: null,
  error: null,
};

// Home
// 친구의 펀딩 내역
export const friendsFunding = {
  success: true,
  response: [
    {
      userId: 1,
      userName: "이나래",
      eventType: 0,
      date: "2024-02-28",
      productName: "다이슨 에어랩",
      productImage: "images/1.jpg",
      progress: 75,
    },
    {
      userId: 2,
      userName: "장민혁",
      eventType: 1,
      date: "2024-03-02",
      productName: "플레이스테이션 5 디스크 에디션",
      productImage: "images/2.jpg",
      progress: 60,
    },
    {
      userId: 3,
      userName: "박민상",
      eventType: 1,
      date: "2024-03-02",
      productName: "로지텍 MX Keys",
      productImage: "images/3.jpg",
      progress: 60,
    },
    {
      userId: 4,
      userName: "박지은",
      eventType: null,
      date: null,
      productName: null,
      productImage: null,
      progress: null,
    },
  ],
  error: null,
};

// 펀딩 상세 페이지
export const fundings_id = {
  success: true,
  response: [
    {
      userId: 1,
      userName: "이나래",
      eventType: 0,
      date: "2024-02-28",
      dday: 6,
      productName: "다이슨 에어랩",
      productImage: "images/1.jpg",
      progress: 75,
      fundedPrice: 450000,
      originalPrice: 600000,
    },
  ],
  error: null,
};

// 펀딩하기 페이지 불러오기
export const fundings_id_prepare = {
  success: true,
  response: {
    userId: 1,
    userName: "이나래",
    dday: 6,
    productId: 1,
    productName: "다이슨 에어랩",
    productPrice: 600000,
    productImage: "images/1.jpg",
    averageFundingPrice: 45000,
  },
  error: null,
};

// 펀딩하기
export const supports = {
  success: true,
  response: null,
  error: null,
};

// MyPage
// 카카오 회원가입/로그인
export const users_login = {};

// 나의 진행 중인 펀딩 내역
export const fundings_state = {
  success: true,
  response: {
    productId: 1,
    productName: "나이키 에어포스1 '07 CW2288-111 올화이트 에어포스원07",
    productImage: "images/1.jpg",
    productPrice: 118000,
    progress: 75,
  },
  error: null,
};

// 펀딩 내역 - 받은 펀딩 내역
export const funding_list = {
  success: true,
  response: [
    {
      productId: 1,
      productName: "나이키 에어포스1 '07 CW2288-111 올화이트 에어포스원07",
      productImage: "images/1.jpg",
      date: "2024-02-22",
      fundedPrice: 88500,
      productPrice: 118000,
      progress: 75,
    },
    {
      productId: 2,
      productName: "다이슨 에어랩",
      productImage: "images/2.jpg",
      date: "2024-01-12",
      fundedPrice: 600000,
      productPrice: 600000,
      progress: 100,
    },
  ],
  error: null,
};

// 펀딩 내역 - 받은 펀딩 상세 페이지
// 펀딩 상세 페이지 API로 대체
export const funding_detail = {
  success: true,
  response: [
    {
      userId: 1,
      userName: "이나래",
      eventType: 0,
      date: "2024-02-28",
      dday: 6,
      productName: "다이슨 에어랩",
      productImage: "images/1.jpg",
      progress: 75,
      fundedPrice: 450000,
      originalPrice: 600000,
    },
  ],
  error: null,
};

// 펀딩 내역 - 준 펀딩 내역
export const funding_list_supports = {
  success: true,
  response: [
    {
      userId: 1,
      userName: "이나래",
      eventType: 0,
      productId: 1,
      date: "2024-02-22",
      productName: "다이슨 에어랩",
      productImage: "images/1.jpg",
    },
    {
      userId: 2,
      userName: "박민상",
      eventType: 1,
      productId: 2,
      date: "2024-03-01",
      productName: "로지텍 MX Keys",
      productImage: "images/2.jpg",
    },
  ],
  error: null,
};

// 펀딩 내역 - 준 펀딩 상세페이지
// 펀딩 상세 페이지 API로 대체
export const funding_supports_detail = {
  success: true,
  response: [
    {
      userId: 1,
      userName: "이나래",
      eventType: 0,
      date: "2024-02-28",
      dday: 6,
      productName: "다이슨 에어랩",
      productImage: "images/1.jpg",
      progress: 75,
      fundedPrice: 450000,
      originalPrice: 600000,
    },
  ],
  error: null,
};

// 찜하기 - 찜한 상품 내역
export const wishlist_list = {
  success: true,
  response: [
    {
      productId: 1,
      productName: "닌텐도 스위치 OLED모델",
      productPrice: 409540,
      productImage: "/images/1.jpg",
    },
    {
      productId: 2,
      productName: "HHKB Studio 해피해킹 스튜디오 영어배열 PD-ID100B",
      productPrice: 454000,
      productImage: "/images/2.jpg",
    },
  ],
  error: null,
};

// 찜하기 - 찜한 상품 상세페이지
// 상품 상세페이지 API로 대체
export const wishlist_detail = {
  success: true,
  response: [
    {
      productId: 1,
      productName: "닌텐도 스위치 OLED모델",
      productPrice: 409540,
      productImage: "/images/1.jpg",
      productDescription:
        "본 제품은 닌텐도 정품이며, 전자제품 특성상 포장훼손 및 개봉 시 변심 반품이 불가하므로 구매시 유의 바랍니다.",
    },
  ],
  error: null,
};

// 최근 본 상품 - 최근 본 상품 내역
export const histories = {
  success: true,
  response: [
    {
      productId: 1,
      productName: "닌텐도 스위치 OLED모델",
      productPrice: 409540,
      productImage: "/images/1.jpg",
    },
    {
      productId: 2,
      productName: "HHKB Studio 해피해킹 스튜디오 영어배열 PD-ID100B",
      productPrice: 454000,
      productImage: "/images/2.jpg",
    },
  ],
  error: null,
};

// 최근 본 상품 - 최근 본 상품 상세페이지
// 상품 상세페이지 API로 대체
export const histories_id = {
  success: true,
  response: [
    {
      productId: 1,
      productName: "닌텐도 스위치 OLED모델",
      productPrice: 409540,
      productImage: "/images/1.jpg",
      productDescription:
        "본 제품은 닌텐도 정품이며, 전자제품 특성상 포장훼손 및 개봉 시 변심 반품이 불가하므로 구매시 유의 바랍니다.",
    },
  ],
  error: null,
};

// 진행 중인 펀딩 - 배송 정보 - 배송 정보 등록하고 결제 완료하기
export const funding_success_payment = {};

// 진행 중인 펀딩- 배송 정보-배송정보 등록하고 차액 결제하기
export const funding_failure_payment = {};

// Notification
// 펀딩 알림 내역
export const notification = {};

// 펀딩 알림 상세페이지
export const notification_detail = {};

// 알림 내역 상세 (펀딩 알림) - 카톡으로 감사인사 보내기
export const message = {};
