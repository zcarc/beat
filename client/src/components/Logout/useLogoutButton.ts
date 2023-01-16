import { useLogout } from "@/apis/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setIsLogin } from "@/store/UserSlice/userSlice";
import useAuth from "@/hooks/useAuth";

export const useLogoutButton = () => {
  const dispatch = useAppDispatch();

  const { removeValid } = useAuth();

  const handleClick = async () => {
    const res = await useLogout();
    if (res.data) {
      dispatch(setIsLogin(false));
      removeValid();
    }
  };
  return { handleClick };
};
