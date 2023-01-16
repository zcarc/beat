import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialChartsState } from "./type";
import { SongsState } from "@/components/Songs/type";

const initialState: initialChartsState = {
  songs: undefined,
};

export const chartsSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    setSongs: (state, action: PayloadAction<SongsState>) => {
      state.songs = action.payload;
    },
  },
});

export const { setSongs } = chartsSlice.actions;

export default chartsSlice.reducer;
