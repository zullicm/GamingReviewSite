import React, { useEffect, useState } from "react";

function SignInPage(){

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


  return(
    <div className="page-container z-depth-2">
      <h5>Login</h5>
      <div className="signin-field">
        <input name="username" placeholder="Username" type="text"></input>
        <input name="password" placeholder="Password" type={show}></input>
        <a class="red waves-effect waves-light btn-small" onClick={showPass}>Show Password</a>
        
        <h5>Don't have an account?</h5>
        <a class="blue lighten-3 waves-effect waves-light btn-small">Sign Up Here!</a>
      </div>
    </div>
  )
}

export default SignInPage