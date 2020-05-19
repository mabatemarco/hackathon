import React, { useState, } from 'react';
import { registerUser } from '../services/auth'
import  {useHistory}  from "react-router-dom";



// This component handles our register form
const Register = (props) => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <hr />
      <form onSubmit={(e) => { props.handleRegister(e) }} >
        <p>Username:</p>
        <input name="username" type="text" value={props.authFormData.username} onChange={e => props.handleChange(e)} />
        <p>Email:</p>
        <input name="email" type="text" value={props.authFormData.email} onChange={e => props.handleChange(e)} />
        <p>Password:</p>
        <input name="password" type="password" value={props.authFormData.password} onChange={e => props.handleChange(e)} />
        <hr/>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
