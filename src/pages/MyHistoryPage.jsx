import React from "react";
import Toggle from "../components/Toggle";
import TopNavBarTitle from "../components/TopNavBarTitle";
import styled from "styled-components";
import MyPageReceivedHistoryListItem from "../components/MyPageReceivedHistoryListItem";
import MyPageGaveHistoryListItem from "../components/MyPageGaveHistoryListItem";

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MyHistoryPage = () => {
  return (
    <>
      <TopNavBarTitle title="펀딩 내역" />
      <ToggleWrapper>
        <Toggle option1="받은 펀딩" option2="준 펀딩" />
      </ToggleWrapper>
      <h2>2024년</h2>

      <div>받은 펀딩 아이템</div>
      <MyPageReceivedHistoryListItem
        to=""
        eventType="생일"
        eventDate="02/22"
        productName="나이키 에어포스"
        productImage="/assets/products/nike.png"
        fundedPrice="88,500/118,000원"
      />
      <MyPageReceivedHistoryListItem
        to=""
        eventType="생일"
        eventDate="01/12"
        productName="다이슨 에어랩"
        productImage="/assets/products/dyson.png"
        fundedPrice="450,000/600,000원"
      />

      <div>준 펀딩 아이템</div>
      <MyPageGaveHistoryListItem
        userName="이나래"
        userImage="/assets/images/person.png"
        eventDate="02/22"
        eventType="생일"
        productImage="/assets/products/dyson.png"
        productName="다이슨 에어랩"
      />
    </>
  );
};

export default MyHistoryPage;
