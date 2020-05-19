import React, { useState, useEffect } from 'react'
import '../css/Group.css';
import { getOneGroup } from '../services/apihelper.js'
import Selector from './Selector.js'
import Chat from './Chat.js'
import Events from './Events.js'

export default function Group(props) {
  const [groupData, setGroupData] = useState(null)

  useEffect(async () => {
    const groupData = await getOneGroup(props.id)
    setGroupData(groupData)
    console.log(groupData)
  }, [])

  return (
    <>
      {groupData ?
        <div className='group-page'>
          <div className='group-page-flex'>
            <Selector
              groupData={groupData}
              userData={props.userData}
            />
            <Chat
              groupData={groupData}
            />
            <Events
              groupData={groupData}
            />
          </div>
        </div>


        :
        <h2>no data</h2>
      }</>
  )
}
