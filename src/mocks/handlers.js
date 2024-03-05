import { HttpResponse, http } from "msw";
import {
  cancelWishlist,
  friendsList,
  fundingDetail,
  fundingPrepare,
  productDetail,
  products,
  registerFunding,
  supports,
  wishlists,
} from "./mockApis";

export const handlers = [
  // 선물샵 상품 목록 가져오기
  http.get("/products", async (request) => {
    return HttpResponse.json(products, { status: 200 });
  }),

  // 상품 상세 페이지
  http.get("/products/:productId", async () => {
    return HttpResponse.json(productDetail, { status: 200 });
  }),

  // 찜하기 (token)
  http.post("/wishlist", async (request) => {
    return HttpResponse.json(wishlists, { status: 200 });
  }),

  // 찜하기 취소 (token)
  http.delete("/wishlist/:wishlistId", async (request) => {
    return HttpResponse.json(cancelWishlist, { status: 200 });
  }),

  // 펀딩 등록 (token)
  http.post("/fundings", async (request) => {
    return HttpResponse.json(registerFunding, { status: 200 });
  }),

  // 친구의 펀딩 내역 (token)
  http.get("/fundings", async (request) => {
    return HttpResponse.json(friendsList, { status: 200 });
  }),

  // 펀딩 상세 페이지
  http.get("/fundings/:fundingId", async (request) => {
    return HttpResponse.json(fundingDetail, { status: 200 });
  }),

  // 펀딩 정보(메시지, 금액) 입력 페이지 불러오기 (token)
  http.get("/fundings/:fundingId/prepare", async (request) => {
    return HttpResponse.json(fundingPrepare, { status: 200 });
  }),

  // 펀딩하기(token, kakao pg)
  http.post("supports", async (request) => {
    return HttpResponse.json(supports, { status: 200 });
  }),
];
