import React from "react";
import useConversation from "../../stateManage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const User = ({user}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation ?._id === user._id;
  const {socket, onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`} onClick={() => setSelectedConversation(user)}>
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div>
          <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
            <div className="w-14 rounded-full">
              <img src="https://scontent.fblr4-1.fna.fbcdn.net/v/t39.30808-6/480174085_600651399457885_2552396672872761068_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=N26XtBxlc3gQ7kNvgHkUJly&_nc_oc=AdmF40nKh0ynO9qEUTQQMKb0vMMTwQWLDXYKHXcSTrZwe6sI5JVwLPg5oN2Nr0z0aZfFCB5xinmoJ_fTGW8vsU1U&_nc_zt=23&_nc_ht=scontent.fblr4-1.fna&_nc_gid=5Ls7YhrmEIhqF7IKccaWfQ&oh=00_AYHiAQi6tmerAqIGIS1L8tBeM3vqlNDQt_u2P9f9IOHI0A&oe=67E577B3" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
