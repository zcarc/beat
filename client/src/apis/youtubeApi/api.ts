import { SERVER_DATA_URL } from "@/constants/url";
import { ItemState } from "@/types/music";
import axios from "axios";
import { GetSearchListByTitleParams } from "./type";

export const getSearchListByTitle = async ({
  q,
  fltr = undefined,
  limit = 20,
}: GetSearchListByTitleParams) =>
  await axios.get<ItemState[]>(
    `${SERVER_DATA_URL}/search/${q}/?fltr=${fltr}&limit=${limit}`
  );

export const getCharts = async () =>
  await axios.get(`${SERVER_DATA_URL}/get_charts`);
