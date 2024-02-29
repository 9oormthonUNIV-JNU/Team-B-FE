import React from "react";
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
  return (
    <Wrapper>
      <img src="/logo.svg" alt="기프티 로고" width={40} />
      <WelcomeMessage>노주영님, 안녕하세요!</WelcomeMessage>
    </Wrapper>
  );
};

export default TopNavBarMain;
