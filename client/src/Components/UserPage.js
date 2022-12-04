import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function UserPage({ user, setCurrentUser }){
  const history = useHistory()
  const [image, setImage] = useState(user.profile_img)

//--------------------------
  console.log(user)
//--------------------------


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
      <div className="homepage-container">
        <div className="user-profile-img-help"><img className="user-profile-img" src={image} /></div>
        <h3 className="username white-text">{user.username}</h3>

      </div>
    </div>
  )
}

export default UserPage