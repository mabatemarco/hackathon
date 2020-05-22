import React, { useEffect } from 'react'; // removed useState and useEffect Hooks 
import { withRouter } from 'react-router-dom';
import {addUserToGroup} from '../services/apihelper'

function GroupCards(props) {
  let rand = Math.floor(Math.random() * 25) + 70;

  const addUser = async (groupId) => {
    const response = await addUserToGroup(groupId)
    props.getUserData()
    props.history.push(`/groups/${groupId}`)
  }

  return (

    <div key={props.id} id={props.id} className="group-card">
      <h3>{props.title}</h3>
      <div class={`progress-circle p${rand}`}>
        <span>{rand}%</span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <button onClick={()=>{addUser(props.id)}}>Join</button>
    </div>
  )
}

export default withRouter(GroupCards);

{/*<img src='https://i.imgur.com/bvoROcJt.png?1' className="cat-icon" /> {props.imageURL} => use this for production mode*/ }