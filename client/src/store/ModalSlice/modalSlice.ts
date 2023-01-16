import { createSlice } from "@reduxjs/toolkit";
import { InitialModalState } from "./type";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PLAYER_STATES } from "@/constants/player";

const initialState: InitialModalState = {
  show: false,
  reload: false,
  videoId: "",
  currentTime: 0,
  duration: 0,
  playerState: PLAYER_STATES.UNSTARTED,
  videoEvent: undefined,
  showPlaylst: false,
  showAddPlaylst: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowTrue: (state) => {
      state.show = true;
    },
    setShowFalse: (state) => {
      state.show = false;
    },
    setReloadTrue: (state) => {
      state.reload = true;
    },
    setReloadFalse: (state) => {
      state.reload = false;
    },
    setVideoId: (state, action: PayloadAction<string>) => {
      state.videoId = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setPlayerState: (state, action: PayloadAction<number>) => {
      state.playerState = action.payload;
    },
    setVideoEvent: (state, action: PayloadAction<any>) => {
      state.videoEvent = action.payload;
    },
    CLOSE_MODAL: (state) => {
      state.show = false;
      state.playerState = PLAYER_STATES.PAUSED;
      state.currentTime = 0;
      state.duration = 0;
    },
    setShowPlaylistTrue: (state) => {
      state.showPlaylst = true;
    },
    setShowPlaylistFalse: (state) => {
      state.showPlaylst = false;
    },
    setShowAddPlaylistTrue: (state) => {
      state.showAddPlaylst = true;
    },
    setShowAddPlaylistFalse: (state) => {
      state.showAddPlaylst = false;
    },
  },
});

export const {
  setShowTrue,
  setShowFalse,
  setReloadTrue,
  setReloadFalse,
  setVideoId,
  setCurrentTime,
  setDuration,
  setPlayerState,
  setVideoEvent,
  CLOSE_MODAL,
  setShowPlaylistTrue,
  setShowPlaylistFalse,
  setShowAddPlaylistTrue,
  setShowAddPlaylistFalse,
} = modalSlice.actions;

export default modalSlice.reducer;
