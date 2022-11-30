import React from "react";
import { useHistory } from "react-router-dom";

function NavUser({ user, setCurrentUser }){
  const history = useHistory()

  function login(){
    history.push("/login")
  }

  function handleLogoutClick() {
    fetch("/logout", 
    { method: "DELETE" 
  }).then((r) => {
      if (r.ok) {
        setCurrentUser(null)
      }
    });
    login()
  }

  return (
    <div onClick={handleLogoutClick} className="signin">
      <img className="profile-pic" src={user.profile_img} /><button className="user-button">{user.username}</button>
    </div>
  )
}

export default NavUser