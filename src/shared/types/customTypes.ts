import {
  SpecializationEnum,
  StatusEnum,
  UserTypeEnum,
} from "@/shared/types/aijusrist";

export type TAccount = {
  access: string;
  refresh: string;
  detail: string;
  user_id: string;
  user_role: string;
  status: string;
};

export type TUsersParams = {
  user_type?: UserTypeEnum;
  specialization?: SpecializationEnum;
};

export type TConsultationParams = {
  status?: StatusEnum;
};

export type TChatMessagesParams = {
  room?: number;
  user?: number;
};
