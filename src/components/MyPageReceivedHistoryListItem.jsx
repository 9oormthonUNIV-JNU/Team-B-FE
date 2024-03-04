import React from "react";
import ProgressBar from "./ProgressBar";
import CircledImage from "./CircledImage";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px 0;
  color: inherit;
  text-decoration-line: none;
`;

const SectionRight = styled.div`
  display: grid;
  gap: 4px;
  flex-grow: 1;
`;

const ProductArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.div`
  font-weight: 700;
`;

const EventInfo = styled.div`
  font-size: 14px;
`;

const FundedPrice = styled.div`
  color: #8c8c8c;
`;

const MyPageReceivedHistoryListItem = ({
  to,
  eventType,
  eventDate,
  productName,
  productImage,
  fundedPrice,
}) => {
  return (
    <Wrapper to={to}>
      <CircledImage
        src={productImage}
        alt={productName}
        width={80}
        height={80}
      />
      <SectionRight>
        <EventInfo>
          {eventType} ({eventDate})
        </EventInfo>
        <ProductArea>
          <ProductName>{productName}</ProductName>
          <FundedPrice>{fundedPrice}</FundedPrice>
        </ProductArea>
        <ProgressBar progress={75} showNumber />
      </SectionRight>
    </Wrapper>
  );
};

export default MyPageReceivedHistoryListItem;
