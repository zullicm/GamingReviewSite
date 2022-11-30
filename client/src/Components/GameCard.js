import React from "react";
import { useHistory } from "react-router-dom";
import NoUser from "./NoUser";

function GameCard({ game, setGamePage, reviewOption, user }){
  const {name, description, platform, id, release_year, image } = game
  const history = useHistory()

  function toGamePage(){
    setGamePage(game)
    history.push("/gamepage")
  }

  return(
    <div className="gamecard-container">
      <div className="gamecard">
        {user ? reviewOption : <NoUser />}
        <img onClick={toGamePage} className="game-cover" src={image}/>
        <div className="game-info">
          <h4 className="white-text">{name}</h4>
          <p className="white-text">{platform} : {release_year}</p>
          <p className="description white-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default GameCard