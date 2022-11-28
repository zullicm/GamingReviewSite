import React, { useState } from "react";

function SignUpForm({switchForm, setCurrentUser}){

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

  function onSubmit(e){
    e.preventDefault()
    fetch(`/signup`,{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        username,
        profile_img: image,
        password
      })
    })
    .then (res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } else {
        res.json().then(e => console.log(e))
      }
    })
  }


  return(
    <div className="page-container z-depth-2">
      <div>
      <h5 className="white-text">Have an account?</h5>
        <a onClick={switchForm} className="blue lighten-3 waves-effect waves-light btn-small">Login Here!</a>
      </div>
      <div className="signin-field">
        <label className="left">Username</label>
        <input 
          id="username" 
          name="username" 
          placeholder="Username" 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input>
        <label className="left">Profile Picture</label>
        <input 
          name="image" 
          placeholder="image url" 
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}></input>
        <label className="left">Password</label>
        <input 
          name="password" 
          placeholder="Password" 
          type={show}
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <a className="red waves-effect waves-light btn-small" onClick={showPass}>Show Password</a>
        <br/>
        <label className="left">Re-Type Password</label>
        <input 
          name="re-password" 
          placeholder="Password" 
          type={reShow}
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}></input>
        <a className="red waves-effect waves-light btn-small" onClick={reShowPass}>Show Password</a>
        <br/>
        <br/>
        <a className="green waves-effect waves-light btn-large" onClick={onSubmit}>SignUp</a>
      </div>
    </div>
  )
}

export default SignUpForm