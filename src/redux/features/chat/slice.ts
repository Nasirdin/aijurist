import { createSlice } from "@reduxjs/toolkit";
import { ChatMessage, ChatRoom } from "@/shared/types/aijusrist";
import {
  getChatMessagesList,
  getChatRoomList,
} from "@/redux/features/chat/reducer";

interface ChatState {
  chatroomList: {
    loading: boolean;
    error?: string | null;
    success: boolean;
    chatroomList: ChatRoom[];
  };
  chatMessagesList: {
    loading: boolean;
    error?: string | null;
    success: boolean;
    chatMessagesList: ChatMessage[];
  };
}

const initialState: ChatState = {
  chatroomList: {
    loading: false,
    error: null,
    success: false,
    chatroomList: [],
  },
  chatMessagesList: {
    loading: false,
    error: null,
    success: false,
    chatMessagesList: [],
  },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatRoomList.pending, (state, action) => {
      state.chatroomList.loading = true;
      state.chatroomList.error = null;
      state.chatroomList.success = false;
    });
    builder.addCase(getChatRoomList.fulfilled, (state, action) => {
      state.chatroomList.loading = false;
      state.chatroomList.error = null;
      state.chatroomList.success = true;
      state.chatroomList.chatroomList = action.payload.reverse();
    });
    builder.addCase(getChatRoomList.rejected, (state, action) => {
      state.chatroomList.loading = false;
      state.chatroomList.error = action.error.message;
      state.chatroomList.success = false;
    });
    builder.addCase(getChatMessagesList.pending, (state, action) => {
      state.chatMessagesList.loading = true;
      state.chatMessagesList.error = null;
      state.chatMessagesList.success = false;
    });
    builder.addCase(getChatMessagesList.fulfilled, (state, action) => {
      state.chatMessagesList.loading = false;
      state.chatMessagesList.error = null;
      state.chatMessagesList.success = true;
      state.chatMessagesList.chatMessagesList = action.payload;
    });
    builder.addCase(getChatMessagesList.rejected, (state, action) => {
      state.chatMessagesList.loading = false;
      state.chatMessagesList.error = action.error.message;
      state.chatMessagesList.success = false;
    });
  },
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;
