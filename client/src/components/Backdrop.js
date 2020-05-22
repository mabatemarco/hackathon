import React from 'react';
import "../css/Backdrop.css";

const Backdrop = (props) => (
  props.show ? <h1 className='Backdrop' onClick={props.clicked}>
  X
  </h1> : null
)
export default Backdrop