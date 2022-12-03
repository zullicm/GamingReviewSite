import React from "react";

function ReviewCard({ review }){
  
  return(
    <div className="">
      <div className="review-container" >
        <p className="review-username"><em><b><u>Most Recent Review</u></b></em></p>
        <br/>
        <p className="review-username"><b>{review.user.username}</b> gave it a rating of <b>{review.rating}</b> and said:<br/><br/>
        </p>
        <br/>
        <br/>
        <p className="review-username">{review.comment}</p>
        <br/>
        <br/>
        <p className="review-username"><b>Want to leave a leave a review?</b></p>
        <p className="review-username"><b>Click on the games cover photo to see how!</b></p>
      </div>
    </div>
  )
}

export default ReviewCard