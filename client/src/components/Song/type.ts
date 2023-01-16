export type SongParams = {
  title: string;
  videoId: string;
  artists: Artist[];
  thumbnails: Thumbnail[];
  isExplicit: boolean;
  album: Album;
  rank: string;
  trend: string;
};

export type Artist = {
  name: string;
  id: string;
  [index: string]: string;
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
