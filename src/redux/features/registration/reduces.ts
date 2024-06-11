"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginUser } from "@/shared/types/aijusrist";
import api from "@/redux/service/api/api";
import { toastError, toastSuccess } from "@/components/Toasts/toastify";

export const login = createAsyncThunk(
  "account/login",
  async (data: LoginUser) => {
    try {
      
      
    } catch (error) {
      toastError("Incorrect email or password!");
      throw error;
    }
  },
);


