import React from "react";

function ReviewCard({ review }){
  
  return(
    
    <div className="review-container" >
      <p className="review-username"><b>{review.user.username}</b></p>
      <p>{review.comment}</p>
      
    </div>
  )
}

export default ReviewCard