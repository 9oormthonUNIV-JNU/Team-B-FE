import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircledImage from "./CircledImage";

const Wrapper = styled(Link)`
  display: flex;
  padding: 16px 0;
  justify-content: space-between;
  text-decoration-line: none;
  color: inherit;
  align-items: center;
`;

const SectionLeft = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Notification = styled.div`
  color: #000000;
  font-size: 16px;
`;

const NotificationsListItem = ({
  fundingId,
  userImage,
  userName,
  productName,
  productImage,
  notificationId
}) => {
  return (
    <>
      {/* 본인의 펀딩 상품으로 product 변경 요망 */}
      <Wrapper to={`/funding/${fundingId}/shipment`}>
        <SectionLeft>
          <CircledImage src={productImage} alt={productName} />
          <Notification>
            펀딩이 완료되었어요!
          </Notification>
        </SectionLeft>
      </Wrapper>
      <Wrapper to={`/notifications/${notificationId}`}>
        <SectionLeft>
          <CircledImage src={userImage} alt={userName} />
          <Notification>
            {userName}님이 [{productName}]에 펀딩해주셨어요!
          </Notification>
        </SectionLeft>
      </Wrapper>
    </>
  );
};

export default NotificationsListItem;
