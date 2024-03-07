import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const SocialKakao = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return (
    <div onClick={handleLogin}>
      <Image src="/assets/kakao_login_medium_wide.png" alt="카카오 로그인" />
    </div>
  );
};

export default SocialKakao;
