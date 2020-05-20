import React, { useState, useEffect } from 'react';//removed useState and useEffect Hooks
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";//removed useHistory Hook
//import { loginUser } from '../services/auth';

// This component handles our login form and has a link to the register form
function Login(props) {

  return (
    <div className="auth-container">
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        props.handleLogin(e);

      }}
      >
        <p>Username:</p>
        <input name="username" type="text" value={props.authFormData.username} onChange={e => props.handleChange(e)} />
        <p>Password:</p>
        <input name="password" type="password" value={props.authFormData.password} onChange={e => props.handleChange(e)} />
        <hr />
        <button>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default withRouter(Login);
