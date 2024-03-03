import React from "react";
import styled from "styled-components";
import CircledImage from "./CircledImage";

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  color: inherit;
  align-items: center;
`;

const MyPageProfile = ({ userImage, userName }) => {
  return (
    <>
      <Wrapper>
        <CircledImage src={userImage} alt={userName} />
        <div>{userName}</div>
      </Wrapper>
    </>
  );
};

export default MyPageProfile;
