import { useValid, useLogout } from "@/apis/authApi";
import { useAppSelector } from "@/store/hooks";

const useAuth = () => {
  const isLogin = useAppSelector((state) => state.user.isLogin);

  const {
    isLoading: isLoadingValid,
    data: validData,
    refetch: refetchValid,
    isError: isValidError,
    remove: removeValid,
  } = useValid({
    onSuccess(data) {},
  });

  return {
    isLogin,
    isLoadingValid,
    validData,
    refetchValid,
    useLogout,
    isValidError,
    removeValid,
  };
};

export default useAuth;
