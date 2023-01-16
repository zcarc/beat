import { UseQueryValidResponse } from "@/apis/authApi/type";
import { AxiosResponse } from "axios";

export type LoggedInProps = {
  validData: AxiosResponse<UseQueryValidResponse, unknown> | undefined;
};
