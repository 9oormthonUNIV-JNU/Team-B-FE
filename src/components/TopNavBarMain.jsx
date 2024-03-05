import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const WelcomeMessage = styled.div`
  font-size: 14px;
`;

const TopNavBarMain = () => {
  const { isLoggedIn, userName } = useSelector((state) => state.auth);

  return (
    <Wrapper>
      <img src="/logo.svg" alt="기프티 로고" width={40} />
      {isLoggedIn && <WelcomeMessage>{userName}님, 안녕하세요!</WelcomeMessage>}
    </Wrapper>
  );
};

export default TopNavBarMain;
