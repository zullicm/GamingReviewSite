import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import SignInPage from './Components/SignInPage';



function App() {


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
