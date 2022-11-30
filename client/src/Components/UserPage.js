import React from "react";

function UserPage({ user }){

  return (
    <div className="homepage-container">{user.username}</div>
  )
}

export default UserPage