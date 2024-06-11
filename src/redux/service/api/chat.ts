import { client } from "@/redux/service/axios";
import { ChatMessage, ChatRoom, User } from "@/shared/types/aijusrist";
import { TChatMessagesParams } from "@/shared/types/customTypes";

const chatroom = "chat/chatroom/";
const chat = "chat/chatbot/";

class Chat {
  getChatRoomList() {
    return client.get<ChatRoom[]>(chatroom);
  }
  getChatRoomById(id: string) {
    return client.get<ChatRoom>(`${chat}${id}/`);
  }
  addChatRoom(data: Partial<ChatRoom>) {
    return client.post<ChatRoom>(chatroom, data);
  }

  getChatMessagesList(params: TChatMessagesParams) {
    return client.get<ChatMessage[]>(chat, { params });
  }
  addChatMessage(data: Partial<ChatMessage>) {
    return client.post<ChatMessage>(chat, data);
  }
}

export default Chat;
