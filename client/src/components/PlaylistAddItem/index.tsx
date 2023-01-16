import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePlaylistAddItem } from "./usePlaylistAddItem";

export const PlaylistAddItem = () => {
  const { handleShowTrue } = usePlaylistAddItem();
  return (
    <div
      className="flex flex-col space-y-[10px] cursor-pointer"
      onClick={handleShowTrue}
    >
      <div className="relative h-[200px] bg-neutral-800">
        <FontAwesomeIcon
          className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-neutral-300
          text-[40px] cursor-pointer"
          icon={faPlus}
        />
      </div>
      <div className="text-white">새 플레이리스트 추가</div>
    </div>
  );
};
