import { PlaylistModal } from "@/components/PlaylistModal";
import { Outlet } from "react-router-dom";

export const LibraryPage = () => {
  return (
    <div className="px-[220px] py-[60px]">
      <div className="flex flex-col space-y-[40px]">
        <div className="space-y-[25px]">
          <div className="text-white text-[34px] font-[400] ">보관함</div>
          <div className="flex border-b-[1px] border-gray-800 relative">
            <div className="text-white text-[19px] font-[500] border-b-[3px] pb-[12px] border-red-500 relative">
              플레이리스트
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
