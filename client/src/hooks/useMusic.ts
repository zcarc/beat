import { PLAYER_STATES } from "@/constants/player";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setPlayerState,
  setShowAddPlaylistTrue,
  setShowTrue,
  setVideoId,
} from "@/store/ModalSlice/modalSlice";
import { setSelectedMusic } from "@/store/MusicSlice/musicSlice";
import { MusicState } from "@/types/music";
import { useState } from "react";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const useMusic = (item: MusicState) => {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

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

  const { validData } = useAuth();

  const isEqualVideoId = item.videoId === videoId;
  const isPlaying = playerState === PLAYER_STATES.PLAYING;
  const isEqualVideoPlaying = isEqualVideoId && isPlaying;
  const isShowEqualVideoId = show && isEqualVideoId;

  const handleClickPlay = () => {
    if (!isEqualVideoId) {
      dispatch(setVideoId(item.videoId));
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

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleAddPlaylist = () => {
    if (!validData) {
      const res = confirm(
        "로그인이 필요한 서비스입니다. \n 로그인 하시겠습니까?"
      );
      if (res) {
        return navigate("/login");
      }
      return;
    }
    dispatch(setShowAddPlaylistTrue());
    dispatch(setSelectedMusic(item));
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
    handleAddPlaylist,
  };
};
