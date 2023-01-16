import { useLoginPage } from "./useLoginPage";

export const LoginPage = () => {
  const { login, handleChange, handleClick } = useLoginPage();

  const disabled = !login.name.trim() || !login.email.trim();

  return (
    <div className="space-y-[50px] flex flex-col rounded-lg mt-[40px] py-[50px] px-[50px] items-center w-[400px] mx-auto bg-neutral-900">
      <div className="text-[35px] text-neutral-200 font-[400]">로그인</div>
      <div className="space-y-[30px] w-full">
        <div className="flex flex-col space-y-[12px]">
          <div className="w-[60px] flex items-center">
            <label
              className="text-[20px] text-neutral-400 font-[400]"
              htmlFor="name"
            >
              아이디
            </label>
          </div>
          <input
            className="bg-transparent outline-none text-white
          border-b-white/40 border-solid border-b-[1px]"
            onChange={handleChange}
            value={login.name}
            autoFocus
            id="name"
            name="name"
          />
        </div>
        <div className="flex flex-col space-y-[12px]">
          <div className="w-[60px] flex items-center">
            <label
              className="text-[20px] text-neutral-400 font-[400]"
              htmlFor="email"
            >
              이메일
            </label>
          </div>
          <input
            className="bg-transparent outline-none text-white
         border-b-white/40 border-solid border-b-[1px]"
            onChange={handleChange}
            value={login.email}
            id="email"
            name="email"
          />
        </div>
        <div className="pt-[5px] text-[18px] text-neutral-900 font-[500] flex justify-center items-center">
          <button
            className={`w-full rounded-md py-[10px] text-[18px] ${
              disabled
                ? "bg-neutral-700 text-neutral-500"
                : "bg-neutral-200 text-black"
            }`}
            onClick={handleClick}
            disabled={disabled}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};
