import { createSlice } from "@reduxjs/toolkit";
import { Consultation } from "@/shared/types/aijusrist";
import { getConsultationList } from "@/redux/features/consultation/reducer";

interface ConsultationsState {
  consultationList: {
    loading: boolean;
    error?: string | null;
    success: boolean;
    consultationList: Consultation[];
  };
}

const initialState: ConsultationsState = {
  consultationList: {
    loading: false,
    error: null,
    success: false,
    consultationList: [],
  },
};

const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConsultationList.pending, (state, action) => {
      state.consultationList.loading = true;
      state.consultationList.error = null;
      state.consultationList.success = false;
    });
    builder.addCase(getConsultationList.fulfilled, (state, action) => {
      state.consultationList.loading = false;
      state.consultationList.error = null;
      state.consultationList.success = true;
      state.consultationList.consultationList = action.payload;
    });
    builder.addCase(getConsultationList.rejected, (state, action) => {
      state.consultationList.loading = false;
      state.consultationList.error = action.error.message;
      state.consultationList.success = false;
    });
  },
});

export const {} = consultationSlice.actions;

export default consultationSlice.reducer;
