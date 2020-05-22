import React from 'react'
import '../css/Landing.css';
import { Link } from 'react-router-dom';// removed withRouter and useHistory


export default function Landing() {


  return (
    <div className="landing-page">
      <div className="content-box">
        <p>Let's Get Started</p>
      </div>
      <div className="login-btn">
      <Link to='/login'><button>Log in</button></Link>
      </div>
    </div>
  )
}
