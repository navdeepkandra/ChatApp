import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.jsx";
import Loading from "../../components/Loading";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div className="h-screen flex flex-col">
      {/* Messages container - scrollable */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}

        {!loading && messages.length === 0 && (
          <p className="font-bold mt-[20%] text-center font-sans">Say! Hi👋</p>
        )}
      </div>

      {/* Sticky Loader at Bottom */}
      {loading && (
        <div className="sticky bottom-0 left-0 h-screen w-full p-2 bg-white shadow-md">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Messages;
