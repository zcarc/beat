import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialMusicState } from "./type";
import { ItemState, MusicState } from "@/types/music";
import { PlaylistMusicListState } from "@/pages/MyListPage/type";
import { playlistState } from "@/pages/MyListPage/components/PlaylistMusicList/type";
import { postFindAllbyEmailPlaylistsResponse } from "@/apis/playlistApi/type";

const initialState: initialMusicState = {
  musicList: undefined,
  isLoading: false,
  playlists: undefined,
  selectedMusic: undefined,
  playlistMusicList: undefined,
  currentPlaylistInfo: undefined,
  searchLimit: 20,
  searchTitle: "",
  searchLoading: false,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setMusicList: (state, action: PayloadAction<ItemState[]>) => {
      state.musicList = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setPlaylists: (
      state,
      action: PayloadAction<postFindAllbyEmailPlaylistsResponse[]>
    ) => {
      state.playlists = action.payload;
    },
    setSelectedMusic: (state, action: PayloadAction<MusicState>) => {
      state.selectedMusic = action.payload;
    },
    setPlaylistMusicList: (
      state,
      action: PayloadAction<PlaylistMusicListState>
    ) => {
      state.playlistMusicList = action.payload;
    },
    setCurrentPlaylistInfo: (state, action: PayloadAction<playlistState>) => {
      state.currentPlaylistInfo = action.payload;
    },
    setSearchLimit: (state, action: PayloadAction<number>) => {
      state.searchLimit = action.payload;
    },
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
    setSearchLoading: (state, action: PayloadAction<boolean>) => {
      state.searchLoading = action.payload;
    },
  },
});

export const {
  setMusicList,
  setIsLoading,
  setPlaylists,
  setSelectedMusic,
  setPlaylistMusicList,
  setCurrentPlaylistInfo,
  setSearchLimit,
  setSearchTitle,
  setSearchLoading,
} = musicSlice.actions;

export default musicSlice.reducer;
