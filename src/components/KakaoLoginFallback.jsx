import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginThunk } from "../store/slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  font-size: 14px;
  color: #898989;
`;

const KakaoLoginFallback = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginThunk(code))
      .then(unwrapResult)
      .then((response) => {
        localStorage.setItem("auth", response.data.tokenInfo.accessToken);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, navigate, code]);

  return (
    <Container>
      <Wrapper>
        <img src="/assets/Spinner.gif" alt="" />
        <Text>카카오로 로그인 중</Text>
      </Wrapper>
    </Container>
  );
};

export default KakaoLoginFallback;
