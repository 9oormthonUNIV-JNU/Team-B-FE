import React from "react";
import styled from "styled-components";
import MyPageProfile from "../components/MyPageProfile";
import MyPageListItem from "../components/MyPageListItem";
import MyPageOngoingFunding from "../components/MyPageOngoingFunding";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const MyPage = () => {
  return (
    <>
      <Heading>마이페이지</Heading>
      <MyPageProfile userImage="/assets/images/person.png" userName="이나래" />
      <MyPageOngoingFunding />
      <MyPageListItem
        iconSrc="/assets/MyPage/Gift.svg"
        label="펀딩 내역"
        to="/mypage/history"
      />
      <MyPageListItem
        iconSrc="/assets/MyPage/Favorite.svg"
        label="찜하기"
        to="/mypage/liked"
      />
      <MyPageListItem iconSrc="/assets/MyPage/Signout.svg" label="로그아웃" />
    </>
  );
};

export default MyPage;
