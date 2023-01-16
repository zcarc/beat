import { useAddPlaylist } from "@/apis/playlistApi";
import { usePlaylistPage } from "@/pages/PlaylistPage/usePlaylistaPage";
import { useAppDispatch } from "@/store/hooks";
import { setShowAddPlaylistFalse } from "@/store/ModalSlice/modalSlice";
import { UsePlaylistCreatedItemInModalProps } from "./type";

export const usePlaylistCreatedItemInModal = ({
  id,
  selectedMusic,
}: UsePlaylistCreatedItemInModalProps) => {
  const dispatch = useAppDispatch();
  const { fetchPlaylistItems } = usePlaylistPage();
  const onClick = async () => {
    const add = async () => {
      const body = {
        playlistId: id,
        title: selectedMusic.title,
        videoId: selectedMusic.videoId,
        artists: selectedMusic.artists,
        thumbnails: selectedMusic.thumbnails,
        album: selectedMusic.album,
      };
      try {
        const res = await useAddPlaylist(body);
        if (res.status === 200) {
          if (res.data === "ok") {
            alert("플레이리스트에 추가하였습니다.");
            fetchPlaylistItems();
          } else if (res.data === "duplicated") {
            alert("플레이리스트에 이미 존재하는 곡입니다.");
          }
        }
      } catch (e) {
        alert("플레이리스트에 추가할 수 없는 곡입니다.");
      }
    };
    add();
    dispatch(setShowAddPlaylistFalse());
  };
  return { onClick };
};
