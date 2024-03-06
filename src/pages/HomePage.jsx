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

const HomePage = () => {
  const [friendsList, setFriendsList] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await instance.get("/fundings/1");
        setFriendsList(response.data.response);
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
          {friendsList &&
            friendsList.map((item) => (
              <FriendsListItem
                userName={item.userName}
                eventType={item.eventType}
                eventDate={item.date}
                productName={item.productName}
                fundingProgress={item.progress}
                productImage={item.productImage}
              />
            ))}
        </>
      ) : (
        <>
          <div>gifty</div>
          <SocialKakao />
        </>
      )}
    </Suspense>
  );
};

export default HomePage;
