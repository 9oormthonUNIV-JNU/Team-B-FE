import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircledImage from "./CircledImage";

const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  padding: 16px 0;
  color: inherit;
  text-decoration-line: none;
`;

const SectionLeft = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const SectionRight = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ProductName = styled.div`
  font-size: 14px;
`;

const Event = styled.div`
  color: #8c8c8c;
  font-size: 14px;
`;

const MyPageGaveHistoryListItem = ({
  userName,
  userImage,
  eventType,
  eventDate,
  productImage,
  productName,
}) => {
  return (
    <Wrapper>
      <SectionLeft>
        <CircledImage src={userImage} alt={userName} />
        <div>
          <div>{userName}</div>
          <Event>
            {eventType}, {eventDate}
          </Event>
        </div>
      </SectionLeft>
      <SectionRight>
        <ProductName>{productName}</ProductName>
        <CircledImage src={productImage} alt={productName} />
      </SectionRight>
    </Wrapper>
  );
};

export default MyPageGaveHistoryListItem;
