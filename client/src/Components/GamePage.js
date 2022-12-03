import React, {useState} from "react";
import GameCard from "./GameCard";
import ReviewForm from "./ReviewForm";

function GamePage({game, setGamePage, user}){
  


  return(
    <div className="homepage-container">
      {user ? <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id}/>} user={user}/> : <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm />} user={user}/>}
    </div>
  )
}

export default GamePage