import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login(){
  const [account, setAccount] = useState(true)

  function switchForm(){
    setAccount(!account)
  }

  return(
    <div>
      {account ? <LoginForm switchForm={switchForm}/> : <SignUpForm switchForm={switchForm}/>}
      
    </div>
  )
}

export default Login