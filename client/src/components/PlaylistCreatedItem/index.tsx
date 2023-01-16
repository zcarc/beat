import { postFindAllbyEmailPlaylistsResponse } from "@/apis/playlistApi/type";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const PlaylistCreatedItem = ({
  id = 1,
  title = "플레이리스트 이름",
  desc,
  cnt = 99,
}: postFindAllbyEmailPlaylistsResponse) => {
  return (
    <div>
      <Link to={`/mylist/${id}`}>
        <div className="flex flex-col space-y-[10px] cursor-pointer w-full">
          <div className="relative h-[200px] bg-neutral-700">
            <FontAwesomeIcon
              className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-neutral-300
              text-[45px] cursor-pointer"
              icon={faListUl}
            />
          </div>
          <div className="text-white">{title}</div>
        </div>
      </Link>
      <div className="text-neutral-500">{cnt}곡</div>
    </div>
  );
};
