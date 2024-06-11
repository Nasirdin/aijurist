import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/redux/service/api/api";
import { TUsersParams } from "@/shared/types/customTypes";

export const getUsersList = createAsyncThunk(
  "users/getUsersList",
  async (params: TUsersParams) => {
    try {
      const response = await api.users.getUsersList(params);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const getUser = createAsyncThunk("users/getUser", async (id: string) => {
  try {
    const response = await api.users.getUserById(id);
    return response.data;
  } catch (error) {
    throw error;
  }
});
