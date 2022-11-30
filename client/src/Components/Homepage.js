import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

function Homepage({setGamePage}){
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/games")
    .then(res => res.json())
    .then(data => gameSetter(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  function gameSetter(data){
    console.log(data)
    setGames(data)
  }

  

  return(
    <div className="homepage-container">
      {games.map(game => <GameCard user={true} key={game.id} game={game} setGamePage={setGamePage} reviewOption={<p>reviews placeholder</p>}/>)}
    </div>
  )
}

export default Homepage