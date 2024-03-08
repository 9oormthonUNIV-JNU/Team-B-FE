import React, { useState } from "react";
import styled from "styled-components";
import MyPageProfile from "../components/MyPageProfile";
import MyPageListItem from "../components/MyPageListItem";
import MyPageOngoingFunding from "../components/MyPageOngoingFunding";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import LongButton from "../components/LongButton";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const LogoutListItem = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  color: inherit;
  align-items: center;
  text-decoration-line: none;
`;

const MyPage = () => {
  const { isLoggedIn, userImage, userName } = useSelector(
    (state) => state.auth
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Heading>마이페이지</Heading>
          <MyPageProfile userImage={userImage} userName={userName} />
          <MyPageOngoingFunding />
          <MyPageListItem
            iconSrc="/assets/MyPage/Gift.svg"
            label="펀딩 내역"
            to="/mypage/history"
          />
          <MyPageListItem
            iconSrc="/assets/MyPage/Favorite.svg"
            label="찜하기"
            to="/mypage/liked"
          />
          <MyPageListItem
            iconSrc="/assets/MyPage/Time.svg"
            label="최근 본 상품"
            to="/mypage/recent"
          />
          <LogoutListItem onClick={handleClick}>
            <img src="/assets/MyPage/Signout.svg" alt="로그아웃 아이콘" />
            로그아웃
          </LogoutListItem>

          <Modal
            isOpen={isModalOpen}
            title="로그아웃"
            handleClick={handleClick}>
            <div>정말 로그아웃 하시겠습니까?</div>
            <LongButton
              label="로그아웃"
              onClick={() => {
                localStorage.clear("auth");
                dispatch(logout());
                navigate("/");
              }}
            />
          </Modal>
        </>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </>
  );
};

export default MyPage;
