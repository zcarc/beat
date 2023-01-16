import { useLogoutButton } from "./useLogoutButton";

export const Logout = () => {
  const { handleClick } = useLogoutButton();

  return <button onClick={handleClick}>로그아웃</button>;
};
