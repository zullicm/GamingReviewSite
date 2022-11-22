import React from "react";
import { NavLink } from "react-router-dom"
import styled, { css } from 'styled-components'


function NavBar(){


  return(
    <div>
      <nav className="blue">
        <div className="logo-container">
        <NavLink className="page-logo" exact to="/">🎮Bygone Gaming🎮</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar