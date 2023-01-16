export type PostRemovePlaylistMusicParams = {
  playlistId: number;
  musicVideoId: string;
};

export type UseFindAllPlaylistParams = {
  email: string;
};

export type UseCreatePlaylistParams = {
  title: string;
  description: string;
  email: string;
};

export type UseAddPlaylistParams = {
  playlistId: number;
  title: string;
  videoId: string;
  artists: Artist[];
  thumbnails: Thumbnail[];
  album: Album;
};

export type Artist = {
  name: string;
  id: string;
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type Album = {
  name: string;
  id: string;
};

export type User = {
  email: string;
};

export type Create = {
  title: string;
  description: string | undefined;
};

export type postFindAllbyEmailPlaylistsResponse = {
  id: number;
  title: string;
  desc: string;
  cnt: number;
};
