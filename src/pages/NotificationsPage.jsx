import React from "react";
import styled from "styled-components";
import NotificationsListItem from "../components/NotificationsListItem"

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const NotificationsPage = () => {
  return (
    <>
    <Heading>알림</Heading>
    <NotificationsListItem
      /* 친구의 정보 */
      fundingID={1}
      userImage="/assets/images/person.png"
      userName="이나래" 
      /* 본인이 펀딩 올린 상품 */
      productName="플레이스테이션 5 디스크 에디션" 
      productImage="/assets/images/ps5.png"
    >
    </NotificationsListItem>
    </>
  )
};

export default NotificationsPage;
