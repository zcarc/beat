export type PlaylistMusicListProps = {
  id: number;
};

export type PlaylistMusicProps = {
  item: PlaylistMusicState;
  playlistId: number;
};

export type PlaylistMusicListState = PlaylistMusicState[];

export interface PlaylistMusicState {
  music: Music;
  artists: Artists;
  album: Album;
  thumbnails: Thumbnails;
}

export interface Music {
  title: string;
  videoId: string;
}

export interface Artists {
  name: string;
  id: string;
}

export interface Album {
  name: string;
  id: string;
}

export interface Thumbnails {
  url: string;
  width: number;
  height: number;
}
