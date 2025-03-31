import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";
import { getReceiverSocketId } from "../SocketIO/server.js";
import { io } from "../SocketIO/server.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const { id: receiverId } = req.params;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [newMessage._id], // link the new message
      });
    } else {
      conversation.messages.push(newMessage._id); // push message ID to existing conversation
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    
    res.status(201).json({ msg: "Message sent successfully 🎉", newMessage });

  } catch (error) {
    console.log("Error in sending message: " + error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getMessage = async (req, res) => {
  try {
    const {id: chatUser} = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all : [senderId, chatUser]},
    }).populate("messages");
    if(!conversation){
      return res.status(201).json([]);
    }
    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch(error) {
    console.log("Error in getMessage " + error);
    res.status(500).json({message: "Internal server error"});
  }
}