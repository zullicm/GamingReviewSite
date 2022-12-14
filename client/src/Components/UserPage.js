import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GameCard from "./GameCard";
import ReviewCard from "./ReviewCard";
import ReviewUpdate from "./ReviewUpdate";

function UserPage({ user, setCurrentUser, setGamePage, allReviews, editReview, deleteReview, addReview }){
  const history = useHistory()
  const reviewsRating = user.reviews.map(review => review.rating)
  const ratingTotal = reviewsRating.reduce((a, b) => a + b, 0)
  const ratingAvg = ratingTotal / reviewsRating.length
  const lastLetter = user.username.slice(-1)
  const [changeReview, setChangeReview] = useState(false)
  const [review, setReview] = useState(null)
  const [reviews, setReviews] = useState(allReviews)
  
    function pushLogin(){
    history.push("/login")
  }
    function logoutUser(){
      fetch("/logout", 
      { method: "DELETE" 
    }).then((r) => {
        if (r.ok) {
          setCurrentUser(null)
        }
      });
      pushLogin()
    }

  function sendAddReview(newReview){
    setChangeReview(!changeReview)
    console.log(newReview)
    let removeOld = reviews.filter(review => review.id !== newReview.id)
    const newReviews = removeOld.unshift(newReview)
    setReviews(removeOld)
    addReview(removeOld)
  }
  
  function editReview(review){
    setChangeReview(!changeReview)
    setReview(review)
  }

  function sendDeleteReview(data){
    setChangeReview(!changeReview)
    const deleted = reviews.filter(review => review.id !== data.id)
    setReviews(deleted)
    deleteReview(deleted)
  }


const filterReviews = reviews.filter(review => review.user.id === user.id)

  return (
    <div>
      <div className="profile-container">
        <div className="user-review-info">
          <h4>This is {user.username}</h4>
          <h4>They have left <b><em><u>{user.reviews.length}</u></em></b> reviews</h4>
          <h4>and they have a review average of <b><em><u>{Math.round(ratingAvg)}</u></em></b></h4>
        </div>
        <div className="user-profile-img-help"><img className="user-profile-img" src={user.profile_img} alt={user.username}/></div>
      <br/>
      <br/>  
      <a className="logout red waves-effect waves-light btn-large" onClick={logoutUser} >Logout</a>
      </div>
      <div className="homepage-container">
        <h2 className="username white-text">{user.username}{lastLetter === "s" ? "'" : "'s"} Reviews</h2>
        {changeReview ? 
        <GameCard 
        user={true}  
        key={review.id} 
        game={review.game} 
        setGamePage={setGamePage} 
        reviewOption={<ReviewUpdate 
          gameID={review.game.id} 
          userID={user.id} 
          addReview={sendAddReview} 
          currentRate={review.rating} 
          currentComment={review.comment} 
          reviewID={review.id} 
          deleteReview={sendDeleteReview}/>}/> 
        : 
        filterReviews.map(review => <GameCard 
        user={true} 
        key={review.id} 
        game={review.game} 
        setGamePage={setGamePage} 
        reviewOption={<ReviewCard 
        review={review} user={user} 
        type="profile" 
        editReview={editReview}/>}/>)}
      </div>
    </div>
  )
}

export default UserPage