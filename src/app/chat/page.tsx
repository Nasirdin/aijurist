import React, { Suspense } from "react";
import Header from "@/components/Header/page";
import HistoryBar from "@/components/chat/HistoryBar";
import ChatPanel from "@/components/chat/ChatPanel";

const Chat = () => {
  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="w-full h-fit flex px-6 gap-6">
        <HistoryBar />
        <div className="rounded-2xl p-6 bg-[#111517] w-full h-[600px]">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
};

export default Chat;
