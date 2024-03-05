import { instance } from "./instance";

export const login = async (code) => {
  return instance.post(
    `${process.env.REACT_APP_API_URL}users/kakao-login?code=${code}`
  );
};
