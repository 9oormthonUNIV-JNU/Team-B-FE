import React from "react";
import BottomNavBar from "../components/BottomNavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 16px;
`;

const NavLayout = () => {
  return (
    <>
      <StyledMain>
        <Outlet />
      </StyledMain>
      <BottomNavBar />
    </>
  );
};

export default NavLayout;
