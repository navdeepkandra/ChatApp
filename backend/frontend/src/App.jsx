import React from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import Logout from "./home/left1/Logout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import Loading from "./components/Loading";

const App = () => {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to="/login"/>
            )
          }
        />

        <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
