import React from "react";
import { useHistory } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function GameCard({ game, setGamePage, reviewOption, user }){

  const {name, description, platform, release_year, image } = game

  const history = useHistory()

  function toGamePage(){
    setGamePage(game)
    history.push("/gamepage")
  }

  return(
    <div className="gamecard-container">
      <div className="gamecard">
        {user ?  reviewOption || <ReviewCard review={game.reviews.slice(-1)[0]} type="main"/> : <h3 id="no-user-review">To leave a review on this game, please login 😀</h3>}
        
        
        <img onClick={toGamePage} className="game-cover" src={image} alt={name} />
        <div className="game-info">
          <h4 className="game-name white-text">{name}</h4>
          <p className="white-text">{platform} : {release_year}</p>
          <p className="description white-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default GameCard