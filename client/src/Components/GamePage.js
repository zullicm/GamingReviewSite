import React, {useState, useEffect} from "react";
import GameCard from "./GameCard";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function GamePage({game, setGamePage, user, allReviews}){
  const [reviews, setReviews] = useState(allReviews)


  function addReview(newReview){
    console.log(newReview)
    setReviews([newReview, ...reviews])
  }

  console.log(game.reviews)
 
  function reviewSetter(data){
    console.log("reviewSetter ran")
    setReviews(data)
  }

  useEffect(() => {
  fetch('/reviews')
  .then(res => res.json())
  .then(data => reviewSetter(data))
}, [])

if(game.reviews){
  return(
    <div className="homepage-container">
      {user ? 
      <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id} addReview={addReview}/>} user={user}/> 
      : 
      <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} addReview={addReview}/>} user={user}/>}
      {game.reviews.map(review => <ReviewCard review={review} type="game"/>)}
    </div>
  )
  }else{
    const filterReviews = reviews.filter(review => game.id === review.game.id)
    return(
      <div className="homepage-container">
        {user ? 
        <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id} addReview={addReview}/>} user={user}/> 
        : 
        <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id} addReview={addReview}/>} user={user}/>}
        {filterReviews.map(review => <ReviewCard review={review} type="game"/>)}
      </div>
    )
  }
}

export default GamePage