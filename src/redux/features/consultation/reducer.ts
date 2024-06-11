import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/redux/service/api/api";
import { Consultation } from "@/shared/types/aijusrist";
import { TConsultationParams } from "@/shared/types/customTypes";

export const getConsultationList = createAsyncThunk(
  "consultation/getConsultationList",
  async (params: TConsultationParams) => {
    try {
      const response = await api.consultation.getConsultationsList(params);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addConsultation = createAsyncThunk(
  "consultation/addConsultation",
  async (data: Pick<Consultation, "lawyer" | "description">) => {
    try {
      const response = await api.consultation.addConsultation(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const editConsultation = createAsyncThunk(
  "consultation/editConsultation",
  async (
    {
      id,
      data,
    }: {
      id: number;
      data:
        | {
            meeting_link: string;
            meeting_time: string;
            status: string;
          }
        | Partial<Consultation>;
    },
    { dispatch },
  ) => {
    try {
      const response = await api.consultation.editConsultation({ id, data });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
