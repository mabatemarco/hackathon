import React from 'react'; // removed useState and useEffect Hooks 
import { withRouter } from 'react-router-dom';
import CreateGroup from './CreateGroup';

function OneGroup(props) {
  return (
    <div className="group-cards-container">
      <div id={props.key} className="group-card">
        <img src='https://i.imgur.com/bvoROcJt.png?1' className="cat-icon" /> {/*{props.imageURL} => use this for production mode*/}
        <h3>{props.title}</h3>
        < CreateGroup />
      </div>
    </div>
  )
}

export default withRouter(OneGroup);
