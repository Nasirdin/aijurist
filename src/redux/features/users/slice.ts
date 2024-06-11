import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/shared/types/aijusrist";
import { getUser, getUsersList } from "@/redux/features/users/reducer";

interface UsersState {
  usersList: {
    loading: boolean;
    error?: string | null;
    success: boolean;
    usersList: User[];
  };
  currentUser: {
    loading: boolean;
    error?: string | null;
    success: boolean;
    currentUser: User | null;
  };
}

const initialState: UsersState = {
  usersList: {
    loading: false,
    error: null,
    success: false,
    usersList: [],
  },
  currentUser: {
    loading: false,
    error: null,
    success: false,
    currentUser: null,
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearCurrentUser(state, action) {
      state.currentUser.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersList.pending, (state, action) => {
      state.usersList.loading = true;
      state.usersList.error = null;
      state.usersList.success = false;
    });
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      state.usersList.loading = false;
      state.usersList.error = null;
      state.usersList.success = true;
      state.usersList.usersList = action.payload;
    });
    builder.addCase(getUsersList.rejected, (state, action) => {
      state.usersList.loading = false;
      state.usersList.error = action.error.message;
      state.usersList.success = false;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.currentUser.loading = true;
      state.currentUser.error = null;
      state.currentUser.success = false;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.currentUser.loading = false;
      state.currentUser.error = null;
      state.currentUser.success = true;
      state.currentUser.currentUser = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.currentUser.loading = false;
      state.currentUser.error = action.error.message;
      state.currentUser.success = false;
    });
  },
});

export const { clearCurrentUser } = userSlice.actions;

// export const selectUsersListLoading = (state: RootState) =>
//   state.user.usersList.loading;
// export const selectUsersList = (state: RootState) =>
//   state.user.usersList.usersList;
// export const selectCurrentUserLoading = (state: RootState) =>
//   state.user.currentUser.loading;
// export const selectCurrentUser = (state: RootState) =>
//   state.user.currentUser.currentUser;

export default userSlice.reducer;
