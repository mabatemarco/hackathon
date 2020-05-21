import React from 'react';
import "../css/Backdrop.css";

const Backdrop = (props) => (
  props.show ? <button className='Backdrop' onClick={props.clicked}>
  X
  </button> : null
)
export default Backdrop