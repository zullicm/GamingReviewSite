import React, { useState } from "react";

function ReviewForm(){
  const [rate, setRate] = useState(10)
  const [comment, setComment] = useState("")

  function onSetRate(e){
    const num = e.target.value
    setRate(num)
  }

  function onSetComment(e){
    setComment(e.target.value)
  }

  return(
    <div className="review-form">
      <button onClick={onSetRate} value="1" className="rate-button">1</button>
      <button onClick={onSetRate} value="2" className="rate-button">2</button>
      <button onClick={onSetRate} value="3" className="rate-button">3</button>
      <button onClick={onSetRate} value="4" className="rate-button">4</button>
      <button onClick={onSetRate} value="5" className="rate-button">5</button>
      <button onClick={onSetRate} value="6" className="rate-button">6</button>
      <button onClick={onSetRate} value="7" className="rate-button">7</button>
      <button onClick={onSetRate} value="8" className="rate-button">8</button>
      <button onClick={onSetRate} value="9" className="rate-button">9</button>
      <button onClick={onSetRate} value="10" className="rate-button">10</button>
      <p>Rate the Game 1-10</p>
      <p>Your Current Rating: {rate}</p>
        <label className="left">Comment</label>
          <textarea id="textarea1" 
          class="materialize-textarea"
          placeholder="Comment"
          value={comment} 
          onChange={onSetComment}
          ></textarea>
        <br/>
        <br/>
        <a className="green waves-effect waves-light btn-large" >Submit Review</a>
    </div>
  )
}

export default ReviewForm