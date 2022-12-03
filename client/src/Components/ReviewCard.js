import React from "react";

function ReviewCard({ review }){
  
  return(
    <div className="">
      <div className="review-container" >
        <p className="review-username"><b>{review.user.username}</b> said:<br/> and gave it a rating of:
        <br/><b>{review.rating}</b></p>
        <p>{review.comment}</p>
      </div>
    </div>
  )
}

export default ReviewCard