import React from "react";
import styled from "styled-components";
import TopNavBarTitle from "../components/TopNavBarTitle";
import ProductItem from "../components/ProductItem";

const Grid = styled.div`
  display: grid;
  padding: 24px 0;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  row-gap: 24px;
`;

const MyLikedPage = () => {
  const products = [
    {
      productId: 1,
      productImage: "/assets/products/cap.png",
      productName: "바잘 3D 모노그램 로고 오버핏 볼캡",
      productPrice: 27300,
    },
    {
      productId: 2,
      productImage: "/assets/products/dior.png",
      productName:
        "[백화점 정품] 디올 백스테이지 글로우 페이스 팔레트 (무료선물포장), 004 로즈골드, 1개",
      productPrice: 71800,
    },
    {
      productId: 3,
      productImage: "/assets/products/dyson.png",
      productName:
        "[국내AS 정품]다이슨 에어랩 멀티 스타일러 컴플리트 롱 (블루/블러시)/ED",
      productPrice: 648270,
    },
    {
      productId: 4,
      productImage: "/assets/products/ipad.png",
      productName: "Apple 2022 아이패드 에어 5세대",
      productPrice: 817520,
    },
    {
      productId: 5,
      productImage: "/assets/products/keyboard.png",
      productName: "HHKB Studio 해피해킹 스튜디오 영어배열 PD-ID100B",
      productPrice: 454000,
    },
    {
      productId: 6,
      productImage: "/assets/products/nike.png",
      productName: "나이키 에어포스1 '07 CW2288-111 올화이트 에어포스원07",
      productPrice: 118000,
    },
    {
      productId: 7,
      productImage: "/assets/products/nintendo.png",
      productName: "닌텐도 스위치 OLED모델",
      productPrice: 409540,
    },
    {
      productId: 8,
      productImage: "/assets/products/perfume.png",
      productName:
        "디올 소바쥬 오 드 뚜왈렛 100ML백화점 정품 조 니 뎁 향수, 100ml, 1개",
      productPrice: 145000,
    },
    {
      productId: 9,
      productImage: "/assets/products/ps5.png",
      productName: "플레이스테이션 5 슬림 디지털 에디션",
      productPrice: 557000,
    },
  ];

  return (
    <>
      <TopNavBarTitle title="찜하기" />
      <Grid>
        {products.map((item) => (
          <ProductItem
            key={item.productId}
            productId={item.productId}
            productImage={item.productImage}
            productName={item.productName}
            productPrice={item.productPrice}
          />
        ))}
      </Grid>
    </>
  );
};

export default MyLikedPage;
