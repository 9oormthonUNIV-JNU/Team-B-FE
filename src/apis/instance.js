import axios from "axios";

export const instance = axios.create({
  timeout: 5000,
  baseURL: "http://3.37.63.176:8080/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth");
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    console.log("config!!!");
    console.log(config);
    return config;
  },
  (error) => {
    console.log("error!!");
    console.log(error);
    return Promise.reject(error);
  }
);
