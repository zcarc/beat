import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { Logout } from "../Logout/Logout";
import SearchBar from "../SeachBar";

export const Navbar = () => {
  const { isLoadingValid, validData } = useAuth();
  if (isLoadingValid) return <></>;
  return (
    <div className="flex flex-col justify-center space-y-[18px] pt-[20px] pb-[55px] px-[27px]">
      <div className="flex text-white ">
        <ul className="flex justify-end items-center space-x-[70px] flex-[1.7] text-[23px] text-neutral-300 font-[300]">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/charts">차트</Link>
          </li>
          <li>
            <Link to="/library/playlist">보관함</Link>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>

        <ul className="flex justify-end items-center space-x-[40px] flex-[1] text-[23px] text-neutral-300 font-[300]">
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>{validData ? <Logout /> : <Link to="/login">로그인</Link>}</li>
        </ul>

        <hr />
      </div>
      <div className="text-center"></div>
    </div>
  );
};
