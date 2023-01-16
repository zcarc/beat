import { useCreatePlaylist } from "@/apis/playlistApi";
import useAuth from "@/hooks/useAuth";
import { usePlaylistPage } from "@/pages/PlaylistPage/usePlaylistaPage";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setShowPlaylistFalse } from "@/store/ModalSlice/modalSlice";
import { ChangeEvent, useState } from "react";

export const usePlaylistModal = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const show = useAppSelector((state) => state.modal.showPlaylst);
  const { validData } = useAuth();
  const { fetchPlaylistItems } = usePlaylistPage();

  const dispatch = useAppDispatch();

  const handleShowFalse = () => {
    dispatch(setShowPlaylistFalse());
  };

  const handleClickCreate = () => {
    if (title.trim() === "") return alert("공백은 입력할 수 없습니다.");
    if (validData?.data.email) {
      const create = async () => {
        const res = await useCreatePlaylist({
          title,
          description,
          email: validData.data.email!,
        });
        if (res.status === 200) {
          fetchPlaylistItems();
        }
      };
      create();
    }
    setTitle("");
    setDescription("");
    handleShowFalse();
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return {
    show,
    title,
    description,
    handleShowFalse,
    handleChangeTitle,
    handleChangeDescription,
    handleClickCreate,
  };
};
