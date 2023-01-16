import { SERVER_API_URL } from "@/constants/url";
import axios from "axios";
import { PostLoginParams, PostSignupParams } from "./type";

export const postLogin = async (params: PostLoginParams) => {
  return await axios.post(SERVER_API_URL + "/login", params);
};

export const postLogout = async () => {
  return await axios.post(SERVER_API_URL + "/logout");
};

export const postSignup = async (params: PostSignupParams) => {
  return await axios.post(SERVER_API_URL + "/signup", params);
};

export const getValid = async () => {
  return await axios.get(SERVER_API_URL + "/valid");
};
