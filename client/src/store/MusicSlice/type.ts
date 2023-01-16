import { postFindAllbyEmailPlaylistsResponse } from "@/apis/playlistApi/type";
import { playlistState } from "@/pages/MyListPage/components/PlaylistMusicList/type";
import { PlaylistMusicListState } from "@/pages/MyListPage/type";
import { ItemState, MusicState } from "@/types/music";

export type initialMusicState = {
  musicList: ItemState[] | undefined;
  isLoading: boolean;
  playlists: postFindAllbyEmailPlaylistsResponse[] | undefined;
  playlistMusicList: PlaylistMusicListState | undefined;
  selectedMusic: MusicState | undefined;
  currentPlaylistInfo: playlistState | undefined;
  searchLimit: number;
  searchTitle: string;
  searchLoading: boolean;
};
