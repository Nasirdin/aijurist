"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addChatMessage,
  getChatMessagesList,
} from "@/redux/features/chat/reducer";
import { toastError } from "@/components/Toasts/toastify";

const arr = [
  "Каким государством является КР?",
  "Кому принадлежит законодательная власть КР?",
  "Сколько раз была принята Конституция КР?",
];

const ChatPanel = () => {
  const searchParams = useSearchParams();
  const chatMessagesList = useSelector(
    (state: RootState) => state.chat.chatMessagesList.chatMessagesList,
  );
  const [message, setMessage] = useState<string>("");
  const [localSendMessage, setLocalSendMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const room_id = searchParams.get("room");
  const [account, setAccount] = useState<any>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === undefined) return;
    setAccount(JSON.parse(localStorage.getItem("account")!));
  }, []);

  const sendMessage = () => {
    const data = {
      room: +room_id!,
      user: account.user_id,
      user_input: message,
    };
    setLocalSendMessage(message);
    setMessage("");
    if (inputRef.current) inputRef.current.value = "";
    dispatch(addChatMessage(data))
      .unwrap()
      .then(() => {
        setLocalSendMessage("");
        dispatch(getChatMessagesList({ room: +room_id! }));
      })
      .catch(() => {
        toastError("Something wrong!");
      });
  };

  useEffect(() => {
    dispatch(getChatMessagesList({ room: +room_id! }));
  }, [room_id]);

  return (
    <div className="flex justify-center items-end h-full">
      <div className="flex flex-col gap-4 w-10/12">
        <div>
          {chatMessagesList.length || localSendMessage.length ? (
            <div className="flex items-end h-[480px]">
              <div className="flex w-full h-full overflow-auto pt-20 flex-col gap-24">
                {chatMessagesList.map((message) => (
                  <div key={message.id}>
                    <p className="px-4 py-2 bg-gray-700 text-white text-base float-end rounded-xl -my-16 max-w-[75%] w-fit">
                      {message.user_input}
                    </p>
                    <p className="px-4 py-2 bg-gray-800 text-white text-base float-start rounded-xl max-w-[75%] w-fit">
                      {message.bot_response}
                    </p>
                  </div>
                ))}
                {localSendMessage && (
                  <div>
                    <p className="px-4 py-2 bg-gray-800 text-white text-base float-end rounded-xl max-w-[75%] w-fit">
                      {localSendMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center mb-24 gap-4">
              <p className="text-white text-2xl mb-2">Попробуйте эти запросы</p>
              {arr.map((item) => (
                <div
                  key={item}
                  className="p-4 bg-[#262626] rounded-2xl w-[400px] flex justify-between items-center"
                >
                  <p className="text-white text-sm">{item}</p>
                  <Image
                    src="/icons/arrowRight.svg"
                    alt="product"
                    width={25}
                    height={25}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#262626] rounded-2xl p-4 w-full text-white"
            placeholder="Введите вопрос..."
          />
          <Image
            onClick={sendMessage}
            className="m-auto cursor-pointer"
            src="/images/send.svg"
            alt="product"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
