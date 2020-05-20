import React from 'react'; // removed useState and useEffect Hooks 
import { withRouter } from 'react-router-dom';
import CreateGroup from './CreateGroup';

 function OneGroup(props) {
  return (
    <div id={props.key} className="one-group">
      <img src='https://i.imgur.com/bvoROcJt.png?1' className="cat-icon" /> {/*{props.imageURL} => use this for production mode*/}
      <h3>{props.title}</h3>
        < CreateGroup />
    </div>
  )
 }

export default withRouter(OneGroup);
