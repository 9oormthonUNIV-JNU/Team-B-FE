import React, { useState, useEffect, Suspense } from "react";
import Toggle from "../components/Toggle";
import TopNavBarTitle from "../components/TopNavBarTitle";
import styled from "styled-components";
import MyPageReceivedHistoryListItem from "../components/MyPageReceivedHistoryListItem";
import MyPageGaveHistoryListItem from "../components/MyPageGaveHistoryListItem";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MyHistoryPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await instance.get(); // url 기입 필요
        setProduct(response.data.response);
        console.log(product);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  });

  return (
    <Suspense fallback={<Spinner />}>
      <>
        <TopNavBarTitle title="펀딩 내역" />
        <ToggleWrapper>
          <Toggle option1="받은 펀딩" option2="준 펀딩" />
        </ToggleWrapper>
        <h2>2024년</h2> {/* 연도 수정 필요 */}
        <div>받은 펀딩 아이템</div>
        {product &&
          product.map((item) => (
            <MyPageReceivedHistoryListItem
              to="" /* 수정 필요 */
              eventType={item.eventType}
              eventDate={item.eventDate}
              productName={item.productName}
              productImage={item.productImage}
              fundedPrice="" /* 슬래시 들어가게 수정 필요 */
            />
          ))}
        <div>준 펀딩 아이템</div>
        {product &&
          product.map((item) => (
            <MyPageGaveHistoryListItem
              userName={item.userName}
              userImage={item.userImage}
              eventDate={item.eventDate}
              eventType={item.eventType}
              productImage={item.productImage}
              productName={item.productName}
            />
          ))}
        {/* 각 토글에 맞게 아이템이 들어가야 할텐데 방법을 잘 모르겠습니다.. */}
      </>
    </Suspense>
  );
};

export default MyHistoryPage;
