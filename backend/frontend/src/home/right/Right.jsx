import React, { useEffect } from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type.jsx";
import useConversation from "../../stateManage/useConversation.js";
import {useAuth} from "../../context/AuthProvider.jsx"

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-[70%] text-white bg-slate-950">
      {!selectedConversation ? (
        <Nochat />
      ) : (
        <>
            <ChatUser />
            <div
              className="py-2 flex-navdeep overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
      )}
    </div>
  );
};

const Nochat = () => {
  const {authUser} = useAuth();
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <h1 className="font-semibold text-xl text-center">
          Welcome <span>{authUser.user.name}</span>
          <br />
          Select a chat to start messaging
        </h1>
      </div>
    </div>
  )
}

export default Right;
