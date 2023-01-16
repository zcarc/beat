import { useCallback } from "react";
import { IconProps } from "./type";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({
  hover,
  show,
  isEqualVideoId,
  isShowEqualVideoId,
  isPlaying,
  handleClickCapturePlay,
  handleClickCapturePause,
}: IconProps) {
  const playIcon = useCallback(
    () => (
      <FontAwesomeIcon
        onClickCapture={handleClickCapturePlay}
        className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-white z-10 text-[20px] cursor-pointer"
        icon={faPlay}
      />
    ),
    [handleClickCapturePlay]
  );

  const pauseIcon = useCallback(
    () => (
      <FontAwesomeIcon
        onClickCapture={handleClickCapturePause}
        className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-white z-10 text-[20px] cursor-pointer"
        icon={faPause}
      />
    ),
    [handleClickCapturePause]
  );

  // hover - 이미지 위에 마우스가 있다.
  // show - 모달이 띄워졌다.
  // isEqualVideoId - 이미지와 모달 ID가 같다.
  // isPlaying - 비디오가 재생 중이다.

  if (hover && show && isEqualVideoId && isPlaying) {
    return pauseIcon();
  }

  if (hover && show && isEqualVideoId && !isPlaying) {
    return playIcon();
  }

  if (hover && show && !isEqualVideoId) {
    return playIcon();
  }

  if (hover && !show) {
    return playIcon();
  }

  if (!hover && isShowEqualVideoId && isPlaying) {
    return pauseIcon();
  }

  if (!hover && isShowEqualVideoId && !isPlaying) {
    return playIcon();
  }

  return <></>;
}

export default Icon;
