import React, { Suspense, useEffect, useState } from "react";
import FriendsListItem from "../components/FriendsListItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SocialKakao from "../components/SocialKakao";
import { instance } from "../apis/instance";
import Spinner from "../components/Spinner";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const LandingPage = styled.div`
  display: grid;
  height: 80vh;
  align-items: end;

  > .wrapper {
    text-align: center;
    color: #8c8c8c;
    font-size: 14px;
    line-height: 3em;
  }
`;

const HomePage = () => {
  const [friendsList, setFriendsList] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await instance.get("/fundings");
        setFriendsList(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchFriends();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      {isLoggedIn ? (
        <>
          <Heading>친구</Heading>
          {friendsList.length ? (
            friendsList.map((item) => (
              <FriendsListItem
                userName={item.userName}
                eventType={item.eventType}
                eventDate={item.date}
                productName={item.productName}
                fundingProgress={item.progress}
                productImage={item.productImage}
              />
            ))
          ) : (
            <div>친구가 없습니다</div>
          )}
        </>
      ) : (
        <>
          <LandingPage>
            <div className="wrapper">
              <img src="/assets/Logo.svg" alt="기프티 로고" width={200} />
              <div>모바일 선물하기 펀딩 서비스</div>
            </div>
            <SocialKakao />
          </LandingPage>
        </>
      )}
    </Suspense>
  );
};

export default HomePage;
