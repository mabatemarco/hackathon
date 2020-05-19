import React from 'react'
import '../css/Header.css';


export default function Header(props) {
  return (
    <div>
      <button onClick={props.handleLogout}>Log Out</button>
    </div>
  )
}
