import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CLOSE_MODAL } from "@/store/ModalSlice/modalSlice";
import { useState } from "react";

export const usePlayer = () => {
  const [ready, setReady] = useState(false);
  const videoId = useAppSelector((state) => state.modal.videoId);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(CLOSE_MODAL());
  };

  const handleReadyTrue = () => {
    setReady(true);
  };

  return {
    ready,
    videoId,
    handleReadyTrue,
    handleClose,
    dispatch,
  };
};
