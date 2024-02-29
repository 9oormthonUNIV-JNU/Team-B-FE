import React from "react";
import FriendsListItem from "../components/FriendsListItem";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const HomePage = () => {
  return (
    <>
      <Heading>친구</Heading>
      <FriendsListItem
        fundingId={1}
        userImage="/assets/images/person.png"
        userName="이나래"
        eventType="생일"
        eventDate="2월 28일"
        productName="플레이스테이션 5 디스크 에디션"
        fundingProgress={75}
        productImage="/assets/images/ps5.png"
      />
      <FriendsListItem
        fundingId={2}
        userImage="/assets/images/person.png"
        userName="이나래"
        eventType="생일"
        eventDate="2월 28일"
        productName="플레이스테이션 5 디스크 에디션"
        fundingProgress={75}
        productImage="/assets/images/ps5.png"
      />
    </>
  );
};

export default HomePage;
