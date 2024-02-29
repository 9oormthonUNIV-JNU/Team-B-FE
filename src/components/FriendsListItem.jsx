import React from "react";
import styled from "styled-components";
import CircledImage from "./CircledImage";
import { Link } from "react-router-dom";
import GradientText from "./GradientText";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

const ProfileArea = styled.div`
  flex-grow: 1;
`;

const UserName = styled.div`
  color: #000000;
  font-size: 16px;
`;

const EventDate = styled.div`
  color: #8c8c8c;
  font-size: 14px;
`;

const SectionRight = styled.div`
  display: flex;
  gap: 12px;
  text-align: right;
  align-items: center;
`;

const ProductArea = styled.div`
  flex-grow: 0;
`;

const ProductName = styled.div`
  color: #000000;
  font-size: 12px;
`;

const ProgressBarWrapper = styled.div`
  width: 56px;
  height: 56px;
`;

const FriendsListItem = ({
  fundingId,
  userImage,
  userName,
  eventType,
  eventDate,
  productName,
  fundingProgress,
  productImage,
}) => {
  return (
    <Wrapper to={fundingId && `/funding/${fundingId}`}>
      <SectionLeft>
        <CircledImage src={userImage} alt={userName} />
        <ProfileArea>
          <UserName>{userName}</UserName>
          <EventDate>
            {eventType}, {eventDate}
          </EventDate>
        </ProfileArea>
      </SectionLeft>
      <SectionRight>
        <ProductArea>
          <ProductName>{productName}</ProductName>
          {fundingProgress && <GradientText>{fundingProgress}%</GradientText>}
        </ProductArea>
        <ProgressBarWrapper>
          <CircularProgressbarWithChildren
            value={fundingProgress}
            styles={buildStyles({
              pathColor: "#FF7A00",
            })}>
            <CircledImage
              src={productImage}
              alt={productName}
              width={40}
              height={40}
            />
          </CircularProgressbarWithChildren>
        </ProgressBarWrapper>
      </SectionRight>
    </Wrapper>
  );
};

export default FriendsListItem;
