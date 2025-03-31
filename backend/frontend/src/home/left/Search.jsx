import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useGetAllUsers from "../../context/useGetAllUsers.jsx";
import useConversation from "../../stateManage/useConversation.js";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.filteredUsers.find((user) =>
      user.name?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <div className="h-[10vh]">
      <div className="py-4 px-6">
        <form onSubmit={submitHandler}>
          <div className="flex space-x-3 justify-center">
            <label className="border-[1px] p-3 border-gray-700 bg-slate-900 rounded-lg flex items-center gap-2 w-[80%]">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
