import { useFindAllByEmailPlaylist } from "@/apis/playlistApi";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPlaylists } from "@/store/MusicSlice/musicSlice";
import { useEffect } from "react";

export const usePlaylistPage = () => {
  const { validData } = useAuth();

  const playlists = useAppSelector((state) => state.music.playlists);

  const dispatch = useAppDispatch();

  const fetchPlaylistItems = async () => {
    if (validData) {
      const res = await useFindAllByEmailPlaylist({
        email: validData.data.email!,
      });
      if (res.data) {
        dispatch(setPlaylists(res.data));
      }
    }
  };

  useEffect(() => {
    fetchPlaylistItems();
  }, []);

  return { playlists, fetchPlaylistItems };
};
