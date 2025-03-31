import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4001",
        methods: ["GET", "POST"],
    }
});

//real time messaging
export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
}

const users = {}

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if(userId){
        users[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(users));

    socket.on("disconnect", () => {
        delete users[userId];
        io.emit('getOnlineUsers', Object.keys(users));
    })
});

export {app, io, server}