import React from 'react'
import '../css/Landing.css';
import { Link } from 'react-router-dom';// removed withRouter and useHistory


export default function Landing() {
  

  return (
    <div>
      <p>Welcome, login or register.</p>
      <Link to='/login'><button >Login/Register</button></Link>
    </div>
  )
}
