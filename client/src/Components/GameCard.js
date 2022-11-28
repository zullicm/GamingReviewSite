import React from "react";

function GameCard({ game }){
  const {name, description, platform, id, release_year, image } = game

  return(
    <div className="gamecard-container">
      <div className="gamecard">
        <img className="game-cover" src={image}/>
        <h4 className="white-text">{name}</h4>
        <p className="white-text">{platform} : {release_year}</p>
        <p className="white-text">{description}</p>
      </div>
    </div>
  )
}

export default GameCard