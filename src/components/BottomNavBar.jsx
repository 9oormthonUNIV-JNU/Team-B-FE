import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  width: 100%;
  background-color: #f4f4f4;
  border-top: #ededed solid 1px;
`;

const NavItem = styled(Link)`
  text-decoration-line: none;
  text-align: center;
  width: 100%;
  font-size: 10px;
  padding: 16px 0;
  color: #8c8c8c;
`;

const BottomNavBar = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const menus = [
    {
      name: "홈",
      path: "/",
      icon: "/assets/BottomNavBar/Home.svg",
      iconActive: "/assets/BottomNavBar/Home_fill.svg",
    },
    {
      name: "선물샵",
      path: "/shop",
      icon: "/assets/BottomNavBar/Shop.svg",
      iconActive: "/assets/BottomNavBar/Shop_fill.svg",
    },
    {
      name: "알림",
      path: "/notifications",
      icon: "/assets/BottomNavBar/Notifications.svg",
      iconActive: "/assets/BottomNavBar/Notifications_fill.svg",
    },
    {
      name: "마이페이지",
      path: "/mypage",
      icon: "/assets/BottomNavBar/Mypage.svg",
      iconActive: "/assets/BottomNavBar/Mypage_fill.svg",
    },
  ];

  return (
    <StyledNav>
      {menus.map((item, index) => (
        <NavItem to={item.path} key={item.name}>
          <img
            src={currentPage === item.path ? item.iconActive : item.icon}
            alt={item.name}
          />
          <div>{item.name}</div>
        </NavItem>
      ))}
    </StyledNav>
  );
};

export default BottomNavBar;
