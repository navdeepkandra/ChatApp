# MERN Real-Time Chat Application 💬

A full-stack, real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. This project allows users to sign up, log in, and have private conversations with other online users.



---

## ✨ Core Features

* **User Authentication**: Secure user registration and login system using JWT (JSON Web Tokens).
* **Real-Time Messaging**: Instantaneous message delivery and updates powered by **Socket.IO**.
* **Online User Status**: Sidebar displays a list of all registered users and indicates their real-time online/offline status.
* **Private Conversations**: Users can select anyone from the user list to start a one-on-one chat.
* **Modern UI**: Clean and intuitive user interface designed with Tailwind CSS and DaisyUI for a great user experience.
* **Separate Backend & Frontend**: Fully decoupled architecture for better maintainability and scalability.

---

## 🛠️ Tech Stack

This project is built with a modern technology stack:

| Category      | Technology                                    |
| :------------ | :-------------------------------------------- |
| **Frontend** | React, Tailwind CSS, DaisyUI, Zustand, Axios  |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose        |
| **Real-Time** | Socket.IO                                     |
| **Security** | JWT (JSON Web Tokens), bcrypt.js              |

---

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js (v18 or later recommended)
* MongoDB (local instance or a cloud-hosted one like MongoDB Atlas)

### Setup

1.  **Clone the Repository**
    ```sh
    git clone [https://github.com/navdeepkandra/ChatApp.git](https://github.com/navdeepkandra/ChatApp.git)
    cd ChatApp
    ```

2.  **Setup the Backend**
    ```sh
    # Navigate to the backend folder
    cd backend

    # Install dependencies
    npm install

    # Create a .env file in the 'backend' directory
    # Add the following environment variables
    PORT=5000
    MONGO_DB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    NODE_ENV=development

    # Start the backend server
    npm run dev
    ```

3.  **Setup the Frontend**
    ```sh
    # Navigate to the frontend folder from the root directory
    cd frontend

    # Install dependencies
    npm install

    # Start the frontend development server
    npm run dev
    ```

After following these steps, the application should be running, with the frontend at `http://localhost:3000` and the backend at `http://localhost:5000`.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
