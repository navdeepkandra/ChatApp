import React from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const { authUser, setAuthUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.Password,
    };
    axios
      .post("/api/user/login", userInfo, {withCredentials: true})
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success(`Login Successfull🎉`);
        }

        localStorage.setItem("messenger", JSON.stringify(res.data));
        setAuthUser(res.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.message);
        }
      });
  };
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-black rounded-md px-6 py-3 space-y-3 w-96"
        >
          <h1 className="text-2xl text-center text-blue-600 font-bold">
            Messenger
          </h1>
          <h1 className="text-2xl text-center">
            Login with your{" "}
            <span className="text-blue-600 font-semibold">Account</span>
          </h1>

          {/* Email */}
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              {...register("email")}
            />
          </label>
          <p className="validator-hint hidden">Enter valid email address</p>

          {/* Password */}
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              {...register("Password")}
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            (atleast one number, one lowercase, one uppercase)
          </p>

          <div className="flex justify-center">
            <input
              type="submit"
              className="bg-blue-600 py-2 text-white rounded-md cursor-pointer w-full"
              value="Login"
            ></input>
          </div>
          <p>
            Don't Have Any Account?{" "}
            <Link to={"/signup"} className="text-blue-500 underline cursor-pointer">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
