import { HttpResponse, http } from "msw";
import { products } from "./mockApis";

export const handlers = [
  // 선물샵 상품 가져오기
  http.get("/products", () => {
    return HttpResponse.json(products);
  }),
];
