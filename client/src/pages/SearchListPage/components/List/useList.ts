import { useAppSelector } from "@/store/hooks";

export const useList = () => {
  const musicList = useAppSelector((state) => state.music.musicList);
  const isLoading = useAppSelector((state) => state.music.isLoading);
  return { musicList, isLoading };
};
