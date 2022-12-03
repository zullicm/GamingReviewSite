import React from "react";
import { useHistory } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function GameCard({ game, setGamePage, reviewOption, user }){
  const {name, description, platform, id, release_year, image } = game
  const history = useHistory()

  function toGamePage(){
    setGamePage(game)
    history.push("/gamepage")
  }

  const mostRecentReview = game.reviews.slice(-1)[0]


  return(
    <div className="gamecard-container">
      <div className="gamecard">
        {user ?  reviewOption || <ReviewCard review={mostRecentReview}/> : <h3 id="no-user-review">To leave a review on this game, please login 😀</h3>}
        
        
        <img onClick={toGamePage} className="game-cover" src={image}/>
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