import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

function Homepage(){
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/games")
    .then(res => res.json())
    .then(data => gameSetter(data))
  }, [])

  function gameSetter(data){
    console.log(data)
    setGames(data)
  }

  

  return(
    <div className="homepage-container">
      {games.map(game => <GameCard key={game.id} game={game} />)}
    </div>
  )
}

export default Homepage