import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialUserState } from "./type";

const initialState: initialUserState = {
  isLogin: false,
  isLoadingLogin: false,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setLoadingLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoadingLogin = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setIsLogin, setLoadingLogin, setEmail } = userSlice.actions;

export default userSlice.reducer;
