import { SongParams } from "@/components/Song/type";

export type MusicState = SongParams | ItemState;

export type ListItemProps = {
  item: ItemState;
};

export type UseListItemProps = ListItemProps;

export type ItemState = {
  category: string;
  resultType: string;
  title: string;
  album: Album;
  feedbackTokens: FeedbackTokens;
  videoId: string;
  videoType: string;
  duration: string;
  year: unknown | null;
  artists: Artist[];
  duration_seconds: number;
  isExplicit: boolean;
  thumbnails: Thumbnail[];
};

export type Album = {
  name: string;
  id: string;
};

export type FeedbackTokens = {};

export type Artist = {
  name: string;
  id: string;
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
