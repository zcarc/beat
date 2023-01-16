import { useAppDispatch } from "@/store/hooks";
import { setEmail, setIsLogin } from "@/store/UserSlice/userSlice";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import { LoginState } from "./type";
import useAuth from "@/hooks/useAuth";
import { useLogin } from "@/apis/authApi";

export const useLoginPage = () => {
  const [login, setLogin] = useState<LoginState>({
    name: "",
    email: "",
  });

  const dispatch = useAppDispatch();

  const { removeValid } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (login.email.trim() === "" || login.name.trim() === "") {
      return alert("공백은 입력할 수 없습니다.");
    }

    try {
      const res = await useLogin(login);
      dispatch(setEmail(res.data.email));
      dispatch(setIsLogin(true));
      removeValid();
    } catch (e) {
      return alert(
        "아이디 또는 이메일를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  return {
    login,
    handleChange,
    handleClick,
  };
};
