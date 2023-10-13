import axios from "axios";
import { cookieStorage } from "@ibnlanre/portal";

// creating an instance
export const AUTHAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const token = JSON.parse(
  sessionStorage.getItem("my-user") as string
)?.token;

export const USETOKEN = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

AUTHAPI.interceptors.request.use(
  (req) => {
    let token = sessionStorage.getItem("my-user");
    // console.log(token1);
    if (token) {
      JSON.parse(token);
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  }
  // (error) => {
  //     toast.error("something went wrong")
  //     promises.reject(error);
  // }
);
