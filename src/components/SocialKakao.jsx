import React from "react";

const SocialKakao = () => {
  const REST_API_KEY = "";
  const REDIRECT_URI = "http://localhost:3000/auth";
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return <button onClick={handleLogin}>카카오 로그인</button>;
};

export default SocialKakao;
