import React, { useEffect, useState } from "react";

function Homepage(){
  const [games, setGames] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:4000/games")
  //   .then(res => res.json())
  //   .then(data => gameSetter(data))
  // }, [])

  // function gameSetter(data){
  //   console.log(data)
  //   setGames(data)
  // }

  

  return(
    <div>Homepage</div>
  )
}

export default Homepage