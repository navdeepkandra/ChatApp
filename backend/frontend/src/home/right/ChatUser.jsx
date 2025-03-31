import React from "react";
import useConversation from "../../stateManage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const ChatUser = () => {
  const {selectedConversation} = useConversation()
  const {onlineUsers} = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  }

  const isOnline = getOnlineUserStatus(selectedConversation._id) === "Online" ? "online" : "offline";

  return (
    <div className="flex space-x-4 pl-5 h-[12vh] pt-5 bg-gray-900 hover:bg-gray-600 duration-300">
      <div>
        <div className={`avatar avatar-${isOnline}`}>
          <div className="w-14 rounded-full">
            <img src="https://scontent.fblr4-1.fna.fbcdn.net/v/t39.30808-6/480174085_600651399457885_2552396672872761068_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=N26XtBxlc3gQ7kNvgHkUJly&_nc_oc=AdmF40nKh0ynO9qEUTQQMKb0vMMTwQWLDXYKHXcSTrZwe6sI5JVwLPg5oN2Nr0z0aZfFCB5xinmoJ_fTGW8vsU1U&_nc_zt=23&_nc_ht=scontent.fblr4-1.fna&_nc_gid=5Ls7YhrmEIhqF7IKccaWfQ&oh=00_AYHiAQi6tmerAqIGIS1L8tBeM3vqlNDQt_u2P9f9IOHI0A&oe=67E577B3" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl">{selectedConversation.name}</h1>
        <span className="text-sm">{getOnlineUserStatus(selectedConversation._id)}</span>
      </div>
    </div>
  );
};

export default ChatUser;
