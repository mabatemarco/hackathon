import React, { useState, } from 'react';
import { signUp } from '../services/auth'
import  {useHistory}  from "react-router-dom";



// This component handles our register form
const Register = (props) => {
  const [authFormData, setFormData] = useState(props.authFormData)
  const [currentUser, setCurrentUser] = useState(props.currentUser)

  let history = useHistory();

 const handleRegister = async e => {
   e.preventDefault();
    const currentUser = await signUp(authFormData)
    setCurrentUser(currentUser)
    history.push("/");
 }
  
  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;
    
    setFormData({ ...authFormData, [name]: value })
  }
  
  
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <hr />
      <form onSubmit={(e) => { handleRegister(e) }} >
        <p>Username:</p>
        <input name="username" type="text" value={authFormData.username} onChange={e => handleChange(e)} />
        <p>Email:</p>
        <input name="email" type="text" value={authFormData.email} onChange={e => handleChange(e)} />
        <p>Password:</p>
        <input name="password" type="password" value={authFormData.password} onChange={e => handleChange(e)} />
        <hr/>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
