import { PlaylistMusicListProps } from "@/pages/MyListPage/type";
import { Empty } from "../Empty";
import { PlaylistMusic } from "../PlaylistMusic";
import { usePlaylistMusicList } from "./usePlaylistMusicList";

export const PlaylistMusicList = ({ id }: PlaylistMusicListProps) => {
  const { playlist, list, loading } = usePlaylistMusicList({ id });

  if (loading) return <></>;
  if (!list) return <></>;
  if (!playlist) return <></>;

  return (
    <>
      <div className="text-white border-b-white/10 border-solid border-b-[1px] pb-[40px] mb-[40px] pl-5">
        <div className="font-[500] text-[40px]">{playlist.title}</div>
        <div className="text-neutral-500 text-[20px]">
          총 {playlist.count}곡
        </div>
        <div className="text-neutral-500">{playlist.description}</div>
      </div>
      {list.length === 0 ? (
        <Empty />
      ) : (
        list.map((item) => (
          <PlaylistMusic
            item={item}
            playlistId={playlist.id}
            key={item.music.videoId}
          />
        ))
      )}
    </>
  );
};
