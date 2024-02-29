import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 56px;
`;

const Icon = styled(Link)`
  position: absolute;
  left: 0;
`;

const TopNavBarTitle = ({ title }) => {
  return (
    <Wrapper>
      <Icon to="..">
        <img src="/assets/TopNavBar/Back.svg" alt="뒤로가기 아이콘" />
      </Icon>
      {title}
    </Wrapper>
  );
};

export default TopNavBarTitle;
