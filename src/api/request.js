import axios from "axios";
import { baseURL } from "../config";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // let token = localStorage.getItem('token')
    // if (token) {
    //     config.headers.Authorization = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
