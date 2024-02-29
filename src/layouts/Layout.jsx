import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 16px;
`;

const Layout = () => {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
};

export default Layout;
