import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setReloadFalse, setShowTrue } from "@/store/ModalSlice/modalSlice";
import { useEffect } from "react";

export const useModal = () => {
  const show = useAppSelector((state) => state.modal.show);
  const reload = useAppSelector((state) => state.modal.reload);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer: number | undefined;

    if (reload) {
      timer = window.setTimeout(() => {
        dispatch(setShowTrue());
        dispatch(setReloadFalse());
      });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [reload, dispatch]);
  return {
    show,
  };
};
