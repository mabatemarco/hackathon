import React from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom';


export default function Landing(props) {
  

  return (
    <div>
      <p>Welcome, login or register.</p>
      <Link to='/login'><button >Login/Register</button></Link>
    </div>
  )
}
