import { getSearchListByTitle } from "@/apis/youtubeApi/api";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setMusicList,
  setSearchLimit,
  setSearchLoading,
  setSearchTitle,
} from "@/store/MusicSlice/musicSlice";
import { useDebouncedCallback } from "@react-hookz/web";
import _ from "lodash";
import { ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchBar = () => {
  const title = useAppSelector((state) => state.music.searchTitle);
  const limit = useAppSelector((state) => state.music.searchLimit);
  const loading = useAppSelector((state) => state.music.searchLoading);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSearch = useDebouncedCallback(
    async () => {
      try {
        dispatch(setSearchLoading(true));
        resetSearchLimit();
        const res = await getSearchListByTitle({
          q: title,
          fltr: "songs",
          limit: 20,
        });
        if (res.status === 200) {
          dispatch(setMusicList(_.uniqBy(res.data, "videoId")));
          dispatch(setSearchLoading(false));
          navigate("/search/list");
        }
      } catch (e) {
        console.error(e);
      } finally {
      }
    },
    [title],
    500,
    5000
  );

  const handleScrolling = async (limit: number, title: string) => {
    try {
      dispatch(setSearchLoading(true));
      const res = await getSearchListByTitle({
        q: title,
        fltr: "songs",
        limit: limit,
      });
      if (res.status === 200) {
        dispatch(setMusicList(_.uniqBy(res.data, "videoId")));
        dispatch(setSearchLimit(limit));
        dispatch(setSearchLoading(false));
      }
    } catch (e) {
      console.error(e);
    } finally {
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      if (title.trim() === "") return;

      handleSearch();
    }
  };
  const hanleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTitle(e.target.value));
  };

  const resetSearchLimit = () => {
    dispatch(setSearchLimit(20));
  };

  return {
    title,
    limit,
    loading,
    handleKeyDown,
    hanleTitle,
    handleSearch,
    handleScrolling,
    resetSearchLimit,
  };
};
