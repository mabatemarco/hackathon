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
   debugger
    const currentUser = await signUp(authFormData)
    setCurrentUser(currentUser)
    history.push("/");
 }
  
  
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <hr />
      <form onSubmit={(e) => { handleRegister(e) }} >
        <p>Username:</p>
        <input name="username" type="text" value={authFormData.username} onChange={e => setFormData(e.target.value)} />
        <p>Email:</p>
        <input name="email" type="text" value={authFormData.email} onChange={e => setFormData(e.target.value)} />
        <p>Password:</p>
        <input name="password" type="password" value={authFormData.password} onChange={e => setFormData(e.target.value)} />
        <hr/>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
