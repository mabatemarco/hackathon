import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter , useHistory} from "react-router";
import {signInUser} from '../services/auth'

// This component handles our login form and has a link to the register form
function Login(props) {
  const [authFormData, setFormData] = useState(props.authFormData)

  useEffect(() => {
    console.log(authFormData)
   
  })

  const [currentUser, setCurrentUser] = useState(props.currentUser)
    
  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await signInUser(authFormData);
    setCurrentUser(currentUser);
    history.push("/");
  };
  
    
  return (
    <div className="auth-container">
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        handleLogin(e);
      
      }}
      >
        <p>Username:</p>
       <input name="username" type="text" value={authFormData.username} onChange={e => setFormData(e.target.value)} />
        <p>Password:</p>
    <input name="password" type="password" value={authFormData.password} onChange={e => setFormData(e.target.value)} />
        <hr/>
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default withRouter(Login);
