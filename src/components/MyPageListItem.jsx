import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  color: inherit;
  align-items: center;
  text-decoration-line: none;
`;

const MyPageListItem = ({ iconSrc, label, to }) => {
  return (
    <>
      <Wrapper to={to}>
        <img src={iconSrc} alt={`${label} 아이콘`} />
        {label}
      </Wrapper>
    </>
  );
};

export default MyPageListItem;
