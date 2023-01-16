import { PLAYER_STATES } from "@/constants/player";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCurrentTime } from "@/store/ModalSlice/modalSlice";
import { useIntervalEffect } from "@react-hookz/web";

const delay = 1000;

export const useProgress = () => {
  const currentTime = useAppSelector((state) => state.modal.currentTime);
  const duration = useAppSelector((state) => state.modal.duration);
  const playerState = useAppSelector((state) => state.modal.playerState);
  const show = useAppSelector((state) => state.modal.show);

  const dispatch = useAppDispatch();

  useIntervalEffect(
    () => {
      dispatch(setCurrentTime(currentTime + 1));
    },
    playerState === PLAYER_STATES.PLAYING ? delay : undefined
  );
  return { currentTime, duration, show };
};
