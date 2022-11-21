import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import styled, { css } from 'styled-components'
import NavBar from './Components/NavBar';



function App() {

  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  `

  function handleClick(){
    console.log("Success!")
  }

  return (
    <div className="App">
      <NavBar/>
        <h1 className='firsthead' >Hello world</h1>
        <Button onClick={handleClick}>Test</Button>
    </div>
  );
}

export default App;
