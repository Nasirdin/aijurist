import { client } from "@/redux/service/axios";
import { Consultation } from "@/shared/types/aijusrist";
import { TConsultationParams } from "@/shared/types/customTypes";

const CONSULTATIONS = "consultations/consultations/";

class Consultations {
  getConsultationsList(params: TConsultationParams) {
    return client.get<Consultation[]>(CONSULTATIONS, { params });
  }
  addConsultation(data: Pick<Consultation, "lawyer" | "description">) {
    return client.post<Consultation>(CONSULTATIONS, data);
  }
  editConsultation({
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
  }) {
    return client.patch<Consultation>(`${CONSULTATIONS}${id}/`, data);
  }
}

export default Consultations;
