import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePlaylistAddItemInModal } from "./usePlaylistAddItemInModal";

export const PlaylistAddItemInModal = () => {
  const { handleShowTrue } = usePlaylistAddItemInModal();
  return (
    <div
      className="flex items-center cursor-pointer space-x-[15px] p-[5px]"
      onClick={handleShowTrue}
    >
      <div className="relative h-[40px] w-[40px] bg-neutral-700">
        <FontAwesomeIcon
          className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-neutral-300
          text-[18px] cursor-pointer"
          icon={faPlus}
        />
      </div>
      <div className="text-white text-[13px]">새 플레이리스트 추가</div>
    </div>
  );
};
