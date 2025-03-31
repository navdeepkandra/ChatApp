import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage";

const Type = () => {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    sendMessages(message);
    setMessage("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="flex space-x-3 h-[8vh] items-center bg-gray-800">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="border-[1px] border-gray-700 bg-slate-900 rounded-lg flex items-center px-3 py-3 w-full grow outline-none mt-1 text-white"
          />
        </div>
        <button className="text-3xl">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default Type;
