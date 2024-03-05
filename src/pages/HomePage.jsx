import React from "react";
import FriendsListItem from "../components/FriendsListItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SocialKakao from "../components/SocialKakao";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Heading>친구</Heading>
          <a href="http://3.37.63.176:8080/users/login">카카오 로그인</a>
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
      ) : (
        <>
          <div>gifty</div>
          <SocialKakao />
        </>
      )}
    </>
  );
};

export default HomePage;
