import { configureStore } from "@reduxjs/toolkit";
import chartsSlice from "./ChartsSlice/chartsSlice";
import modalSlice from "./ModalSlice/modalSlice";
import musicSlice from "./MusicSlice/musicSlice";
import userSlice from "./UserSlice/userSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    music: musicSlice,
    user: userSlice,
    charts: chartsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // video event
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
