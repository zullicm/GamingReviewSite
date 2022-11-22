import React, { useState } from "react";

function SignUpForm({switchForm}){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [image, setImage] = useState("")
  const [show, setShow] = useState("password")
  const [reShow, setReShow] = useState("password")

  function showPass(){
    if (show === "password"){
      setShow("text")
    }else{
      setShow("password")
    }
  }
  function reShowPass(){
    if (reShow === "password"){
      setReShow("text")
    }else{
      setReShow("password")
    }
  }


  return(

    
    <div className="page-container z-depth-2">
      <div>
      <h5 className="white-text">Have an account?</h5>
        <a onClick={switchForm} className="blue lighten-3 waves-effect waves-light btn-small">Login Here!</a>
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
        <label className="left" for="image">Profile Picture</label>
        <input 
          name="image" 
          placeholder="image url" 
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}></input>
        <label className="left" for="password">Password</label>
        <input 
          name="password" 
          placeholder="Password" 
          type={show}
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <a class="red waves-effect waves-light btn-small" onClick={showPass}>Show Password</a>
        <br/>
        <label className="left" for="re-password">Re-Type Password</label>
        <input 
          name="re-password" 
          placeholder="Password" 
          type={reShow}
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}></input>
        <a class="red waves-effect waves-light btn-small" onClick={reShowPass}>Show Password</a>
      </div>
    </div>
  )
}

export default SignUpForm