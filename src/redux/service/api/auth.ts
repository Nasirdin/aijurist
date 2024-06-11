import { LoginUser } from "@/shared/types/aijusrist";
import { client } from "@/redux/service/axios";

const users = "users";

class Auth {
  login(data: LoginUser) {
    return client.post<any>(`${users}/login-user/`, data);
  }
}

export default Auth;
