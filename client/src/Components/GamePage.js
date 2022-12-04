import React, {useState} from "react";
import GameCard from "./GameCard";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function GamePage({game, setGamePage, user}){
  const [reviews, setReviews] = useState(game.reviews)

  function addReview(newReview){
    setReviews([...reviews, newReview])
  }

  return(
    <div className="homepage-container">
      {user ? <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id} addReview={addReview}/>} user={user}/> : <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm />} user={user}/>}
      {reviews.map(review => <ReviewCard review={review} type="game"/>)}
    </div>
  )
}

export default GamePage