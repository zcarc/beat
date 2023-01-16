import { getCharts } from "@/apis/youtubeApi/api";
import { ChartsState } from "@/pages/ChartsPage/type";
import { setSongs } from "@/store/ChartsSlice/chartsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect } from "react";

export const useSongs = () => {
  const songs = useAppSelector((state) => state.charts.songs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetch = async () => {
      const res = await getCharts();
      const data: ChartsState = res.data;
      dispatch(setSongs(data.songs));
    };
    fetch();
  }, []);

  return { songs };
};
