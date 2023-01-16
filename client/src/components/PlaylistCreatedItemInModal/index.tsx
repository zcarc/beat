import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlaylistCreatedItemInModalParams } from "./type";
import { usePlaylistCreatedItemInModal } from "./usePlaylistCreatedItemInModal";

export const PlaylistCreatedItemInModal = ({
  id = 1,
  title = "플레이리스트 이름",
  desc,
  cnt = 0,
  selectedMusic,
}: PlaylistCreatedItemInModalParams) => {
  const { onClick } = usePlaylistCreatedItemInModal({ id, selectedMusic });

  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer space-x-[15px] p-[5px]"
    >
      <div className="relative h-[40px] w-[40px] bg-neutral-700">
        <FontAwesomeIcon
          className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-neutral-300
          text-[18px] cursor-pointer"
          icon={faListUl}
        />
      </div>
      <div>
        <div className="text-white text-[13px]">{title}</div>
        <div className="text-neutral-400 text-[13px] font-[400]">{cnt}곡</div>
      </div>
    </div>
  );
};
