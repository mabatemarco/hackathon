import React from 'react'; // removed useState and useEffect Hooks 

export default function OneGroup(props) {
  return (
    <div id={props.key} className="one-group">
      <img src='https://i.imgur.com/bvoROcJt.png?1' className="cat-icon" /> {/*{props.imageURL} */}
      <h3>{props.title}</h3>
    </div>
  )
}
