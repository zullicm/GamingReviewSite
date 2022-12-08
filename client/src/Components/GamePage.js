import React, {useState} from "react";
import GameCard from "./GameCard";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function GamePage({game, setGamePage, user, allReviews}){
  const [reviews, setReviews] = useState(allReviews)


  function addReview(newReview){
    setReviews([...reviews, newReview])
  }

  
  const filterReviews = reviews.filter(review => game.id === review.game.id)
  console.log(reviews)
  console.log(game)
  console.log(filterReviews)
  
  return(
    <div className="homepage-container">
      {user ? 
      <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id} addReview={addReview}/>} user={user}/> 
      : 
      <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm />} user={user}/>}
      {filterReviews.map(review => <ReviewCard review={review} type="game"/>)}
    </div>
  )
}

export default GamePage