import Auth from "@/redux/service/api/auth";
import Users from "@/redux/service/api/users";
import Consultation from "@/redux/service/api/consultation";
import Chat from "@/redux/service/api/chat";

class ApiService {
  public auth = new Auth();
  public users = new Users();
  public consultation = new Consultation();
  public chat = new Chat();
}

export default new ApiService();
