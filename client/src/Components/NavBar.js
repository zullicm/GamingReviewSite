import React from "react";
import { NavLink } from "react-router-dom"
import styled, { css } from 'styled-components'


function NavBar(){

  const Nav = styled(NavLink)`
  background: lightblue;
  color: red;
  `


  return(
    <div>
      <nav>
        <Nav exact to="/">Gamer</Nav>
      </nav>
    </div>
  )
}

export default NavBar