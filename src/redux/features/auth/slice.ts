"use client";

import { createSlice } from "@reduxjs/toolkit";
import { TAccount } from "@/shared/types/customTypes";

interface UsersState {
  account: TAccount | null;
}

const initialState: UsersState = {
  account: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.account = null;
      localStorage.clear();
    },
    setToken: (state, action) => {
      if (state.account) {
        state.account = { ...state.account, ...action.payload };
        typeof window !== "undefined" &&
          localStorage.setItem("access", action.payload.access);
      }
    },
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
