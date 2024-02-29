import React from "react";
import LongButton from "../components/LongButton";
import FriendsListItem from "../components/FriendsListItem";

const HomePage = () => {
  return (
    <div>
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
      <LongButton label="결제하기" onClick={() => {}} />
    </div>
  );
};

export default HomePage;
