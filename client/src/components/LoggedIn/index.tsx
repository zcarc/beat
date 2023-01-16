import { LoggedInProps } from "./type";

export const LoggedIn = ({ validData }: LoggedInProps) => {
  return <div className="text-white font-[500]">{validData?.data.name}</div>;
};
