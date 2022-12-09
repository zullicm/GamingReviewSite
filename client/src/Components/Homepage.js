import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

function Homepage({setGamePage}){
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/games")
    .then(res => res.json())
    .then(data => gameSetter(data))
  }, [])

  function gameSetter(data){
    setGames(data)
  }
  
  return(
    <div className="homepage-container">
      {games.map(game => <GameCard user={true} key={game.id} game={game} setGamePage={setGamePage} reviewOption={null}/>)}
    </div>
  )
}

export default Homepage