import React from "react";
import BottomNavBar from "../components/BottomNavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopNavBarMain from "../components/TopNavBarMain";

const StyledMain = styled.main`
  padding: 0 16px;
`;

const NavLayout = () => {
  return (
    <>
      <StyledMain>
        <TopNavBarMain />
        <Outlet />
      </StyledMain>
      <BottomNavBar />
    </>
  );
};

export default NavLayout;
