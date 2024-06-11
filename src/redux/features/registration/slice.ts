"use client";

import { createSlice } from "@reduxjs/toolkit";
import { TAccount } from "@/shared/types/customTypes";

interface UsersState {
  account: TAccount | null;
}

const initialState: UsersState = {
  account: null,
};

const registrationSlice = createSlice({
  name: "registration",
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

export const { logout, setToken } = registrationSlice.actions;

export default registrationSlice.reducer;
