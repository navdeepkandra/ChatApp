import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // frontend URL
    credentials: true,
}));

const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

try {
    mongoose.connect(URI);
    console.log("MongoDB Connected");
} catch(err) {
    console.log(err);
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

if(process.env.NODE_ENV === "production") {
    const dirPath = path.resolve();
    app.use(express.static("./frontend/dist"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(dirPath, "./frontend/dist", "index.html"));
    })
}

server.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});