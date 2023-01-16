import { SERVER_API_URL } from "@/constants/url";
import axios from "axios";
import {
  postFindAllbyEmailPlaylistsResponse,
  PostRemovePlaylistMusicParams,
  UseAddPlaylistParams,
  UseCreatePlaylistParams,
  UseFindAllPlaylistParams,
} from "./type";

export const postFindAllbyEmailPlaylists = async (
  params: UseFindAllPlaylistParams
) => {
  return await axios.post<postFindAllbyEmailPlaylistsResponse[]>(
    SERVER_API_URL + "/playlist/find/all",
    params
  );
};

export const postCreatePlaylist = async (params: UseCreatePlaylistParams) => {
  return await axios.post(SERVER_API_URL + "/playlist/create", params);
};

export const postAddPlaylist = async (params: UseAddPlaylistParams) => {
  return await axios.post(SERVER_API_URL + "/playlist/add", params);
};

export const getPlaylistMusic = async (id: number) => {
  return await axios.get(SERVER_API_URL + `/playlist/find/all/music/${id}`);
};

export const postRemovePlaylistMusic = async ({
  playlistId,
  musicVideoId,
}: PostRemovePlaylistMusicParams) => {
  const body = { playlistId, musicVideoId };
  return await axios.post(SERVER_API_URL + "/playlist/remove/music", body);
};
