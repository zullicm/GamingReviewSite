import React from "react";
import { useHistory } from "react-router-dom";

function UserPage({ user, setCurrentUser }){
  const history = useHistory()

  console.log(user)

  function pushLogin(){
  history.push("/login")
}
  function logoutUser(){
    fetch("/logout", 
    { method: "DELETE" 
  }).then((r) => {
      if (r.ok) {
        setCurrentUser(null)
      }
    });
    pushLogin()
  }

  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
      <div className="homepage-container">{user.username}</div>
    </div>
  )
}

export default UserPage