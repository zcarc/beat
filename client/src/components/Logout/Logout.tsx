import { useLogoutButton } from "./useLogoutButton";

export const Logout = () => {
  const { handleClick } = useLogoutButton();

  return <button onClick={handleClick}>๋ก๊ทธ์์</button>;
};
