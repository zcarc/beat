import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  if (!error) return <></>;
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <p className="text-[22px]">요청하신 페이지를 찾을 수 없습니다.</p>
      <p className="text-[18px]">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
