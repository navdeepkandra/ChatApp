import React, { useEffect, useState } from 'react'
import useConversation from '../stateManage/useConversation.js';
import axios from 'axios';

export default function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            if(selectedConversation && selectedConversation._id){
                try{
                    const res = await axios.get(`/api/message/get/${selectedConversation._id}`);
                    setMessages(res.data);
                    setLoading(false);
                } catch(error){
                    console.log("Error in useGetMessage" + error);
                }
            }
        };
        getMessages();
    }, [selectedConversation, setMessages]);
  return {
    messages,
    loading,
  };
}
