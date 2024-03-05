import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../store/slices/authSlice";
import axios from "axios";

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
  console.log(code);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  const getAccessToken = async () => {
    if (accessTokenFetching) return;

    console.log("getAccessToken 호출");

    try {
      setAccessTokenFetching(true);

      const response = await axios.post(
        "http://3.37.63.176:8080/users/kakao-login",
        { code }
      );
      const accessToken = response.data.accessToken;
      console.log("accessToken: ", accessToken);

      dispatch(login());

      setAccessTokenFetching(false);
      navigate("/");
    } catch (error) {
      console.error("Error: " + error);
      setAccessTokenFetching(false);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

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
