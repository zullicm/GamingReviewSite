import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Login from './Components/Login';



function App() {
  const [user, setUser] = useState([])

  function setCurrentUser(user){
    setUser(user)
  }

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
