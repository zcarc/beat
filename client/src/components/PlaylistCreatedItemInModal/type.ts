import { MusicState } from "@/types/music";

export type PlaylistCreatedItemInModalParams = {
  id: number;
  title: string;
  desc: string;
  cnt: number;
  selectedMusic: MusicState;
};

export type UsePlaylistCreatedItemInModalProps = {
  id: number;
  selectedMusic: MusicState;
};
