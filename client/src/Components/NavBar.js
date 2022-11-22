import React from "react";
import { NavLink } from "react-router-dom"
import styled, { css } from 'styled-components'


function NavBar(){


  return(
    <div>
      <nav className="blue lighten-2">
        <NavLink className="page-logo" exact to="/">🎮Bygone Gaming🎮</NavLink>
        <NavLink className="signin" exact to="/signin">Sign In</NavLink>
      </nav>
    </div>
  )
}
// SignInPage
export default NavBar