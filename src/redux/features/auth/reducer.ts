"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginUser } from "@/shared/types/aijusrist";
import api from "@/redux/service/api/api";
import { toastError, toastSuccess } from "@/components/Toasts/toastify";

export const login = createAsyncThunk(
  "account/login",
  async (data: LoginUser) => {
    try {
      const response = await api.auth.login(data);
      typeof window !== "undefined" &&
        localStorage.setItem("access", response.data.access);
      typeof window !== "undefined" &&
        localStorage.setItem("account", JSON.stringify(response.data));
      toastSuccess("You successfully logged in!");
      return response;
    } catch (error) {
      toastError("Incorrect email or password!");
      throw error;
    }
  },
);
