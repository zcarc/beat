import { PlaylistCreatedItem } from "../../components/PlaylistCreatedItem";
import { PlaylistAddItem } from "../../components/PlaylistAddItem";
import { usePlaylistPage } from "./usePlaylistaPage";
import { PlaylistModal } from "@/components/PlaylistModal";

export const PlaylistPage = () => {
  const { playlists } = usePlaylistPage();
  if (!playlists) return <></>;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_200px))] justify-between gap-x-[20px] gap-y-[50px]">
      <PlaylistAddItem />
      {playlists.map((item) => {
        return (
          <PlaylistCreatedItem
            id={item.id}
            title={item.title}
            desc={item.desc}
            cnt={item.cnt}
            key={item.id}
          />
        );
      })}
      <PlaylistModal />
    </div>
  );
};
