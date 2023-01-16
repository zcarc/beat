import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube, { YouTubeEvent } from "react-youtube";
import { usePlayer } from "./usePlayer";
import { playerOpts } from "@/constants/css";
import {
  setCurrentTime,
  setDuration,
  setPlayerState,
  setVideoEvent,
} from "@/store/ModalSlice/modalSlice";

function Player() {
  const { ready, videoId, handleReadyTrue, handleClose, dispatch } =
    usePlayer();

  return (
    <>
      {ready && (
        <div className="text-right mb-[5px] text-gray-400 none">
          <FontAwesomeIcon
            className="text-[21px] cursor-pointer"
            onClick={handleClose}
            icon={faXmark}
          />
        </div>
      )}

      <div>
        <YouTube
          videoId={videoId}
          opts={playerOpts}
          onReady={async (e: YouTubeEvent<any>) => {
            handleReadyTrue();
            const duration = await e.target.getDuration();
            dispatch(setVideoEvent(e));
            dispatch(setDuration(Math.floor(duration)));
          }}
          onPlay={async (e: YouTubeEvent<any>) => {
            const currentItem = await e.target.getCurrentTime();
            const playerState = await e.target.getPlayerState();
            dispatch(setPlayerState(playerState));
            dispatch(setCurrentTime(Math.floor(currentItem)));
          }}
          onPause={async (e: YouTubeEvent<any>) => {
            const currentItem = await e.target.getCurrentTime();
            const playerState = await e.target.getPlayerState();
            dispatch(setPlayerState(playerState));
            dispatch(setCurrentTime(Math.floor(currentItem)));
          }}
        />
      </div>
    </>
  );
}

export default Player;
