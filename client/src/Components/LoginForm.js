import React, { useState } from "react";

function LoginForm({switchForm, setCurrentUser}){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState("password")

  function showPass(){
    if (show === "password"){
      setShow("text")
    }else{
      setShow("password")
    }
  }

  function onSubmit(e){
    e.preventDefault()
    const user = {
      username,
      password
    }
    fetch(`/users`,{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(user)
    })
    .then (res => {
      if(res.ok){
        res.json().then(setCurrentUser)
      } else {
        res.json().then(e => console.log(e))
      }
    })
  }



  return(

    
    <div className="page-container z-depth-2">
      <div>
      <h5 className="white-text">Don't have an account?</h5>
        <a onClick={switchForm} className="blue lighten-3 waves-effect waves-light btn-small">Sign Up Here!</a>
      </div>
      <div className="signin-field">
        <label className="left" for="username">Username</label>
        <input 
          id="username" 
          name="username" 
          placeholder="Username" 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input>
        <label className="left" for="password">Password</label>
        <input 
          name="password" 
          placeholder="Password" 
          type={show}
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <a class="red waves-effect waves-light btn-small" onClick={showPass}>Show Password</a>
      </div>
    </div>
  )
}

export default LoginForm