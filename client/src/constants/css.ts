import { Styles } from "react-modal";
import { Options } from "youtube-player/dist/types";

// Modal
export const modalStyles: Styles = {
  overlay: {
    position: "static",
  },
  content: {
    position: "fixed",
    top: "auto",
    left: "auto",
    right: "20px",
    bottom: "20px",
    border: "none",
    background: "none",
    overflow: "auto",
    borderRadius: "none",
    outline: "none",
    padding: 0,
  },
};

// Player
export const playerOpts: Options = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
