import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/redux/service/api/api";
import { ChatMessage, ChatRoom } from "@/shared/types/aijusrist";
import { TChatMessagesParams } from "@/shared/types/customTypes";

export const getChatRoomList = createAsyncThunk(
  "chat/getChatRoomList",
  async () => {
    try {
      const response = await api.chat.getChatRoomList();
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addChatRoom = createAsyncThunk(
  "chat/addChatRoom",
  async (data: Partial<ChatRoom>) => {
    try {
      const response = await api.chat.addChatRoom(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const getChatMessagesList = createAsyncThunk(
  "chat/getChatMessagesList",
  async (params: TChatMessagesParams) => {
    try {
      const response = await api.chat.getChatMessagesList(params);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addChatMessage = createAsyncThunk(
  "chat/addChatMessage",
  async (data: Partial<ChatMessage>) => {
    try {
      const response = await api.chat.addChatMessage(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
