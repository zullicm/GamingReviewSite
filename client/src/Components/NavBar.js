import React from "react";
import NavUser from "./NavUser";
import { NavLink } from "react-router-dom"



function NavBar({ user, setCurrentUser }){


  return(
    <div>
      <nav className="blue lighten-2">
        <NavLink className="page-logo" exact to="/">🎮Bygone Gaming🎮</NavLink>
        {user ? <NavUser user={user} setCurrentUser={setCurrentUser} /> : <NavLink className="signin" exact to="/login">Login</NavLink>}
      </nav>
    </div>
  )
}

export default NavBar