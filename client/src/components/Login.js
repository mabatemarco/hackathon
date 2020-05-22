import React, { useState, useEffect } from 'react';//removed useState and useEffect Hooks
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";//removed useHistory Hook
//import { loginUser } from '../services/auth';

// This component handles our login form and has a link to the register form
function Login(props) {

  return (
    <div className="auth-container">
      <div className="login-box">
        <h2>Let's Get Started</h2>
        <div className="inputs">
          <form onSubmit={(e) => {
            props.handleLogin(e);
          }} >
            <div className="login-bar">
              <input placeholder="Username" name="username" type="text" value={props.authFormData.username} onChange={e => props.handleChange(e)} />
            </div>
            <div className="pw-bar">
              <input placeholder="Password" name="password" type="password" value={props.authFormData.password} onChange={e => props.handleChange(e)} />
            </div>
            <div className="login-register">
              <button id="login-btn">Login</button>
              <Link to="/register"><button id="register-btn">Register</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
