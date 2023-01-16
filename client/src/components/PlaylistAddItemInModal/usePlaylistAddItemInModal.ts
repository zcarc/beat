import { useAppDispatch } from "@/store/hooks";
import { setShowPlaylistTrue } from "@/store/ModalSlice/modalSlice";

export const usePlaylistAddItemInModal = () => {
  const dispatch = useAppDispatch();

  const handleShowTrue = () => {
    dispatch(setShowPlaylistTrue());
  };

  return { handleShowTrue };
};
