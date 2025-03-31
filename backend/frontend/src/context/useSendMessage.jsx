import React, { useState } from "react";
import axios from "axios";
import useConversation from "../stateManage/useConversation.js";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessages = async (message) => {
    setLoading(true);
    if (selectedConversation && selectedConversation._id) {
      try {
        const res = await axios.post(
          `/api/message/send/${selectedConversation._id}`,
          { message }
        );
        setMessages([...messages, res.data.newMessage]);
        setLoading(false);
      } catch (error) {
        console.log("Error in useSendMessage: " + error);
        setLoading(false);
      }
    }
  };

  return {
    sendMessages,
    loading,
  };
}
