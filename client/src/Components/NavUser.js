import React from "react";
import { useHistory } from "react-router-dom";

function NavUser({ user, setCurrentUser }){
  const history = useHistory()

  // function login(){
  //   history.push("/login")
  // }

  // function handleLogoutClick() {
  //   fetch("/logout", 
  //   { method: "DELETE" 
  // }).then((r) => {
  //     if (r.ok) {
  //       setCurrentUser(null)
  //     }
  //   });
  //   login()
  // }

  function toUserPage(){
    history.push("/userpage")
  }

  return (
    <div onClick={toUserPage} className="signin">
      <button title="To Profile" className="user-button">{user.username}</button>
    </div>
  )
}

export default NavUser