import { getPlaylistMusic } from "@/apis/playlistApi/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCurrentPlaylistInfo,
  setPlaylistMusicList,
} from "@/store/MusicSlice/musicSlice";
import React, { useEffect, useState } from "react";
import { PlaylistMusicListState } from "../../type";
import { playlistState, UsePlaylistMusicListProps } from "./type";

export const usePlaylistMusicList = ({ id }: UsePlaylistMusicListProps) => {
  const [loading, setLoading] = useState(false);
  const playlistMusicList = useAppSelector(
    (state) => state.music.playlistMusicList
  );
  const currentPlaylistInfo = useAppSelector(
    (state) => state.music.currentPlaylistInfo
  );

  const list = playlistMusicList;
  const playlist = currentPlaylistInfo;

  const dispatch = useAppDispatch();

  const savePlaylist = (data: playlistState) => {
    dispatch(setCurrentPlaylistInfo(data));
  };

  const saveList = (data: PlaylistMusicListState) => {
    dispatch(setPlaylistMusicList(data));
  };

  const fetchPlaylistMusic = () => {
    const fetch = async () => {
      setLoading(true);
      const res = await getPlaylistMusic(id);
      if (res.status === 200) {
        const responseData = res.data;
        savePlaylist({
          id: responseData.id,
          title: responseData.title,
          description: responseData.description,
          count: responseData.count,
        });
        saveList(responseData.data);
        setLoading(false);
      }
    };
    fetch();
  };

  useEffect(() => {
    fetchPlaylistMusic();
  }, []);

  return { playlist, list, loading };
};
