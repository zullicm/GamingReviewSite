import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Login from './Components/Login';



function App() {
  const [user, setUser] = useState(null)

  function setCurrentUser(user){
    setUser(user)
    console.log("userset")
  }

  useEffect(() =>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])


  return (
    <div className="App">
      <NavBar user={user} setCurrentUser={setCurrentUser}/>
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
