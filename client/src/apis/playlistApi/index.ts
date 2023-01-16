import {
  postAddPlaylist,
  postCreatePlaylist,
  postFindAllbyEmailPlaylists,
} from "./api";
import {
  UseAddPlaylistParams,
  UseCreatePlaylistParams,
  UseFindAllPlaylistParams,
} from "./type";

export const useFindAllByEmailPlaylist = (props: UseFindAllPlaylistParams) =>
  postFindAllbyEmailPlaylists(props);

export const useCreatePlaylist = (props: UseCreatePlaylistParams) =>
  postCreatePlaylist(props);

export const useAddPlaylist = (props: UseAddPlaylistParams) =>
  postAddPlaylist(props);
