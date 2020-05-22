import React, { useState, } from 'react';
import '../css/Register.css';
import { registerUser } from '../services/auth'
import { useHistory } from "react-router-dom";



// This component handles our register form
const Register = (props) => {
  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Register</h2>
        <div className="register-inputs">
          <form onSubmit={(e) => { props.handleRegister(e) }} >
            <input name="username" placeholder="Username" type="text" value={props.authFormData.username} onChange={e => props.handleChange(e)} />
            <input name="email" placeholder="Email" type="text" value={props.authFormData.email} onChange={e => props.handleChange(e)} />
            <input name="password" placeholder="Password" type="password" value={props.authFormData.password} onChange={e => props.handleChange(e)} />
            <div className="reg-btn">
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
