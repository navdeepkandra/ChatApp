import React from "react";
import User from "./User";
import userGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = userGetAllUsers(null);
  const filteredUsers = allUsers?.filteredUsers || [];

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div
      style={{ maxHeight: "calc(84vh - 1vh)" }}
      className="py-2 flex-navdeep overflow-y-auto"
    >
      {filteredUsers.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
}

export default Users;
