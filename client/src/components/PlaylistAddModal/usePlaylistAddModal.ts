import useAuth from "@/hooks/useAuth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setShowAddPlaylistFalse } from "@/store/ModalSlice/modalSlice";

export const usePlaylistAddModal = () => {
  const show = useAppSelector((state) => state.modal.showAddPlaylst);
  const selectedMusic = useAppSelector((state) => state.music.selectedMusic);

  const dispatch = useAppDispatch();

  const onClickClose = () => {
    dispatch(setShowAddPlaylistFalse());
  };

  return {
    show,
    onClickClose,
    selectedMusic,
  };
};
