import React from "react";
import { useHistory } from "react-router-dom";

function NavUser({ user }){
  const history = useHistory()

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