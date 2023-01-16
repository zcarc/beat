import { useAppDispatch } from "@/store/hooks";
import { setShowPlaylistTrue } from "@/store/ModalSlice/modalSlice";

export const usePlaylistAddItem = () => {
  const dispatch = useAppDispatch();

  const handleShowTrue = () => {
    dispatch(setShowPlaylistTrue());
  };

  return { handleShowTrue };
};
