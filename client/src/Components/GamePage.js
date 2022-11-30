import React from "react";
import GameCard from "./GameCard";

function GamePage({game, setGamePage}){



  return(
    <div className="homepage-container">
      <GameCard game={game} setGamePage={setGamePage}/>
    </div>
  )
}

export default GamePage