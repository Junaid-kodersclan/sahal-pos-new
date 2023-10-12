import store from "@/store/store";
import axios from "axios";

// base Url
let baseURL = "";
baseURL = "http://192.168.100.121:5000/";

const service = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //@ts-ignore
    if (store.getState()?.user?.userData?.token) {
      config.headers["Authorization"] =
        //@ts-ignore
        "Bearer " + store.getState()?.user?.userData?.token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default service;
