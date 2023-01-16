import { AxiosResponse } from "axios";

export type GetLoginParams = {
  code: string | null;
};

export type UeGetLoginParams = {
  code: string | null;
};

export type FetchAndLoginParams = {
  onSuccess: (res: AxiosResponse<useQueryGetLoginResponse, unknown>) => void;
};

export type useQueryGetLoginParams = {
  code: string | null;
};

export type useQueryGetLoginResponse = {
  valid: boolean;
  text: string;
};

export type PostSignupParams = {
  name: string;
  email: string;
};

export type PostSignupResponse = {
  text: string;
};

export type PostLoginParams = {
  name: string;
  email: string;
};

export type UseLoginParams = {
  name: string;
  email: string;
};

export type UseSignUpParams = {
  name: string;
  email: string;
};

export type UseQueryValidResponse = {
  name?: string;
  email?: string;
  isLogin: boolean;
};
