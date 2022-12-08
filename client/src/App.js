import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import GamePage from './Components/GamePage';
import UserPage from './Components/UserPage';



function App() {
  const [user, setUser] = useState(null)
  const [game, setGame] = useState(null)
  const [reviews, setReviews] = useState([])

  function setCurrentUser(user){
    setUser(user)
  }

  function setGamePage(game){
    setGame(game)
  }

  useEffect(() =>{
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))

        fetch('/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
      }
    })
  },[])




  return (
    <div className="App">
      <NavBar user={user} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/">
          <Homepage setGamePage={setGamePage} />
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/gamepage">
          <GamePage game={game} setGamePage={setGamePage} user={user} allReviews={reviews}/>
        </Route>
        <Route exact path="/userpage">
          <UserPage user={user} setCurrentUser={setCurrentUser} setGamePage={setGamePage} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
