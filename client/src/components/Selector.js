import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../css/Selector.css';

export default function Selector(props) {
  const [which, setWhich] = useState('members')

  const handleSelect = (e) => {
    setWhich(e.target.value)
  }

  return (
    <div className='selector'>
      <select onChange={handleSelect}>
        <option value='members'>People in your Group</option>
        <option value='groups'>Your Groups</option>
      </select>
      <div className='selector-content'>
        {which == 'members' ?

          props.groupData.members.map(member => (
            <div className='selector-members'>
              <div className='selector-member-images'>
                <img src={member.user.image} />
              </div>
              <div className='selector-member-info'>
                <h4>{member.user.first_name} {member.user.last_name}</h4>
                <p>{member.user.title}</p>
              </div>
            </div>
          ))
          :
          props.userData.groups.map(group => (
            <Link to={`/groups/${group.id}`}>
            <div className='selector-groups'>
              <div className='selector-group-images'>
                <img src={group.image ? group.image : 'https://www.ergcouncil.com/home/images/group-cheering-diversity.jpg'} />
              </div>
              <div className='selector-group-info'>
                <h4>{group.title}</h4>
              </div>
            </div>
            </Link>
          ))

        }
      </div>
    </div>
  )
}
