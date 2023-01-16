import { YouTubeEvent } from "react-youtube";

export type InitialModalState = {
  show: boolean;
  reload: boolean;
  videoId: string;
  currentTime: number;
  duration: number;
  playerState: number;
  videoEvent: YouTubeEvent<any> | undefined;
  showPlaylst: boolean;
  showAddPlaylst: boolean;
};
