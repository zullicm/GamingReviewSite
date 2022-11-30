import React from "react";
import GameCard from "./GameCard";
import ReviewForm from "./ReviewForm";

function GamePage({game, setGamePage, user}){



  return(
    <div className="homepage-container">
      <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm />} user={user}/>
    </div>
  )
}

export default GamePage