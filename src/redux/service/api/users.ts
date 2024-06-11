import { client } from "@/redux/service/axios";
import { TUsersParams } from "@/shared/types/customTypes";
import { User } from "@/shared/types/aijusrist";

const users = "users";

class Users {
  getUsersList(params: TUsersParams) {
    return client.get<User[]>(`${users}/users/`, {
      params,
    });
  }
  getUserById(id: string) {
    return client.get<User>(`${users}/users/${id}/`);
  }
}

export default Users;
