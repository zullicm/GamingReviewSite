import React, {useState, useEffect} from "react";
import GameCard from "./GameCard";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function GamePage({game, setGamePage, user, allReviews, addReview}){
  const [reviews, setReviews] = useState(allReviews)


  function sendAddReview(newReview){
    console.log(newReview)
    setReviews([newReview, ...reviews])
    addReview([newReview, ...reviews])
  }
 
  function reviewSetter(data){
    setReviews(data)
  }

  useEffect(() => {
  fetch('/reviews')
  .then(res => res.json())
  .then(data => reviewSetter(data))
}, [])


    const filterReviews = reviews.filter(review => game.id === review.game.id)
    return(
      <div className="homepage-container">
        {user ? 
        <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id} addReview={sendAddReview}/>} user={user}/> 
        : 
        <GameCard game={game} setGamePage={setGamePage} reviewOption={<ReviewForm gameID={game.id} userID={user.id} addReview={sendAddReview}/>} user={user}/>}
        {filterReviews.map(review => <ReviewCard key={review.id} review={review} type="game"/>)}
      </div>
    )
  }

export default GamePage