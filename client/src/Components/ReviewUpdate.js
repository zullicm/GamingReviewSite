import React, {useState} from "react";

function ReviewUpdate({currentRate, currentComment, gameID, userID, reviewID, addReview, deleteReview }){
  const [rate, setRate] = useState(currentRate)
  const [comment, setComment] = useState(currentComment)

  function onSetRate(e){
    const num = e.target.value
    setRate(num)
  }

  function onSetComment(e){
    setComment(e.target.value)
  }

  function resetReview(data){
    addReview(data)
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch(`/reviews/${reviewID}`,{
      method: "PATCH",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        comment: comment,
        rating: rate,
        game_id: gameID,
        user_id: userID
      })
    })
    .then(res => res.json())
    .then((data) => resetReview(data))
  }

  function handleDelete(e){
    e.preventDefault()
    fetch(`/reviews/${reviewID}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => deleteReview(data))
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
          className="materialize-textarea"
          value={comment} 
          onChange={onSetComment}
          ></textarea>
        <br/>
        <br/>
        <a className="green waves-effect waves-light btn-large" onClick={handleSubmit} >Submit Review</a> <a className="red waves-effect waves-light btn-large" onClick={handleDelete} >Delete Review</a>
    </div>
  )
}

export default ReviewUpdate