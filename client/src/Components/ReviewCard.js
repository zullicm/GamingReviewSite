import React from "react";

function ReviewCard({ review, type }){
  
  return(
    <div className="">
      <div className={`review-${type}`} >
        <p className={`review-username-${type}`}><em><b><u>Most Recent Review</u></b></em></p>
        <br/>
        <p className={`review-username-${type}`}><b>{review.user.username}</b> gave it a rating of <b>{review.rating}</b> and said:<br/><br/>
        </p>
        <br/>
        <p className={`review-username-${type}`}>{review.comment}</p>
        <br/>
        <br/>
        <p className={`review-username-${type}`}><b>Want to leave a leave a review?</b></p>
        <p className={`review-username-${type}`}><b>Click on the games cover photo to see how!</b></p>
      </div>
    </div>
  )
}

export default ReviewCard