import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const AddGroupBox = (props) => {

  return (
    <div className='new-group'>
      <h4>Add New Group</h4>
      <img onClick={props.clicked} src="https://snipstock.com/assets/cdn/png/5e1cee305468e1de98bea1a5c278a239.png" className="plus-sign-img" />
    </div >
  )
}

export default withRouter(AddGroupBox);