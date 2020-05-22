import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import MyVerticallyCenteredModal from "../components/ProfileModal";
import '../css/Selector.css';
import plus from '../images/Plus and circle@3x.png'
import home from '../images/home.png'
import beach from '../images/beach.png'
import moon from '../images/moon.png'
import rain from '../images/rain.png'
import snow from '../images/snow.png'
import sun from '../images/sun.png'


export default function Selector(props) {
  const [which, setWhich] = useState('members')
  const [groupData, setGroupData] = useState(props.groupData)
  const [userData, setUserData] = useState(props.userData)
  const [memberClass, setMemberClass] = useState('bold')
  const [groupClass, setGroupClass] = useState('')
  

  useEffect(() => {
    setGroupData(props.groupData)
    setUserData(props.userData)
  }, [props])

 

  const handleSelect = (e) => {
    setWhich(e.target.value)
  }

  const memberClick = () => {
    setWhich('members')
    setMemberClass('bold')
    setGroupClass('')
  }

  const groupClick = () => {
    setWhich('groups')
    setMemberClass('')
    setGroupClass('bold')
  }

  return (
    <div className='selector'>
      <div className='selector-which'>
        <h3 className={memberClass} onClick={memberClick}>Members</h3>
        <h4>|</h4>
        <h3 className={groupClass} onClick={groupClick}>Groups</h3>
      </div>
      <div className='selector-content'>
        {which === 'members' ?

          groupData.members.map(member => (
            <div key={member.id} className='selector-members'>
              <div className='selector-member-images'>
                <Link to={`/profile/${member.user.id}`}>
                  <img src={member.user.image} />
                  </Link>
              </div>
              <div className='selector-member-info'>
                <h4>{member.user.first_name} {member.user.last_name}</h4>
                <p>{member.user.title}</p>
                <div className='selector-member-info-image'>
                  <img src={Math.round(Math.random()) ? home : beach} />
                  <img src={Math.round(Math.random()) ? sun : rain} />
                  </div>
              </div>
            </div>
          ))
          :
          <>
            {userData.groups.map(group => (
              <div className='selector-groups-group-link'>
              <Link key={group.id} to={`/groups/${group.id}`}>
                <div className='selector-groups'>
                  <div className='selector-group-images'>
                    <img src={group.image ? group.image : 'https://www.ergcouncil.com/home/images/group-cheering-diversity.jpg'} />
                  </div>
                  <div className='selector-group-info'>
                    <h4>{group.title}</h4>
                  </div>
                </div>
                </Link>
                </div>
            ))}
            <div onClick={props.showCreate} id='plus' className='selector-groups'>
              <div className='selector-groups'>
                <img className='plus' src={plus}/>
              </div>
            </div>
          </>

        }
      </div>
    </div>
  )
}
