import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const AddGroupBox = (props) => {

  useEffect(() => {

  })

  const clickHandler = (e) => {
    
  }

  return (
    <div className='new-group'>
      <Link to={{ pathname: props.match.url + `/add-group` }}> {/*Not sure if this is correct. Might not need to change the URL extension*/}
        <h4>Add New Group</h4>
        <img src="https://snipstock.com/assets/cdn/png/5e1cee305468e1de98bea1a5c278a239.png" className="plus-sign-img" />
      </Link >
    </div >


  )
}

export default withRouter(AddGroupBox);