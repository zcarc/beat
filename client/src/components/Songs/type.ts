import { SongParams } from "../Song/type";

export type SongsState = {
  playlist: string;
  items: SongParams[];
};
