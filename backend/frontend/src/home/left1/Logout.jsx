import React, { useState } from 'react'
import { TbLogout2 } from 'react-icons/tb'
import axios from 'axios';
import Cookies from "js-cookie";
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const logoutHandler = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout Successful");
    } catch(error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  }
  return (
    <div className='w-[4%] bg-slate-950 text-white relative flex justify-center'>
      <div className="absolute bottom-[10px] p-3 align-bottom">
                <button>
                  <TbLogout2 className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" onClick={logoutHandler}/>
                </button>
              </div>
    </div>
  )
}

export default Logout
