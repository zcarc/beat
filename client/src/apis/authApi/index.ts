import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { getValid, postLogin, postLogout, postSignup } from "./api";
import { USE_QUERY_KEYS } from "./constants";
import { UseLoginParams, UseQueryValidResponse, UseSignUpParams } from "./type";

export const useLogin = (props: UseLoginParams) => postLogin(props);
export const useLogout = () => postLogout();
export const useSignUp = (props: UseSignUpParams) => postSignup(props);
export const useValid = (
  options?: UseQueryOptions<
    AxiosResponse<UseQueryValidResponse>,
    AxiosError<unknown>
  >
) =>
  useQuery<AxiosResponse<UseQueryValidResponse>, AxiosError<unknown>>(
    [USE_QUERY_KEYS.VALID],
    getValid,
    options
  );
