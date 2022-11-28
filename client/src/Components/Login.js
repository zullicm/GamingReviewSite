import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ setCurrentUser }){
  const [account, setAccount] = useState(true)

  function switchForm(){
    setAccount(!account)
  }

  return(
    <div>
      {account ? <LoginForm setCurrentUser={setCurrentUser} switchForm={switchForm}/> : <SignUpForm switchForm={switchForm} setCurrentUser={setCurrentUser} />}
      
    </div>
  )
}

export default Login