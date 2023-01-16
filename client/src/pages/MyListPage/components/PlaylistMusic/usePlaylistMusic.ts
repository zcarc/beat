import {
  getPlaylistMusic,
  postRemovePlaylistMusic,
} from "@/apis/playlistApi/api";
import { PLAYER_STATES } from "@/constants/player";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setPlayerState,
  setShowTrue,
  setVideoId,
} from "@/store/ModalSlice/modalSlice";
import {
  setCurrentPlaylistInfo,
  setPlaylistMusicList,
} from "@/store/MusicSlice/musicSlice";
import React, { useState } from "react";
import { shallowEqual } from "react-redux";
import { PlaylistMusicState } from "../../type";
import { usePlaylistMusicList } from "../PlaylistMusicList/usePlaylistMusicList";

export const usePlaylistMusic = (
  item: PlaylistMusicState,
  playlistId: number
) => {
  const [hover, setHover] = useState(false);

  const { show, playerState, videoId, videoEvent } = useAppSelector(
    (state) => ({
      show: state.modal.show,
      playerState: state.modal.playerState,
      videoId: state.modal.videoId,
      videoEvent: state.modal.videoEvent,
    }),
    shallowEqual
  );

  const dispatch = useAppDispatch();

  const isEqualVideoId = item.music.videoId === videoId;
  const isPlaying = playerState === PLAYER_STATES.PLAYING;
  const isEqualVideoPlaying = isEqualVideoId && isPlaying;
  const isShowEqualVideoId = show && isEqualVideoId;

  const handleClickPlay = () => {
    if (!isEqualVideoId) {
      dispatch(setVideoId(item.music.videoId));
    }
    if (!show) {
      dispatch(setShowTrue());
    }

    videoEvent?.target.playVideo();
  };

  const handleClickPuase = () => {
    dispatch(setPlayerState(PLAYER_STATES.PAUSED));
    videoEvent?.target.pauseVideo();
  };

  const handleClickCapturePlay = () => {
    handleClickPlay();
  };

  const handleClickCapturePause = () => {
    handleClickPuase();
  };

  const handleClickRemove = () => {
    const remove = async () => {
      try {
        const body = {
          playlistId: playlistId,
          musicVideoId: item.music.videoId,
        };
        const res = await postRemovePlaylistMusic(body);
        if (res.status === 200) {
          const res = await getPlaylistMusic(playlistId);
          const responseData = res.data;
          dispatch(setPlaylistMusicList(responseData.data));
          dispatch(
            setCurrentPlaylistInfo({
              id: responseData.id,
              title: responseData.title,
              description: responseData.description,
              count: responseData.count,
            })
          );
        }
      } catch (e) {
        return alert("오류가 발생했습니다.");
      }
    };
    remove();
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return {
    hover,
    show,
    isPlaying,
    isEqualVideoId,
    isShowEqualVideoId,
    isEqualVideoPlaying,
    handleMouseEnter,
    handleMouseLeave,
    handleClickCapturePlay,
    handleClickCapturePause,
    handleClickPlay,
    handleClickRemove,
  };
};
