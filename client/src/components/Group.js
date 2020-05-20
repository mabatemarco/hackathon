import React, { useState, useEffect } from 'react'
import '../css/Group.css';
import { useLocation, withRouter } from 'react-router-dom'
import { getOneGroup } from '../services/apihelper.js'
import Selector from './Selector.js'
import Chat from './Chat.js'
import Events from './Events.js'

export default function Group(props) {
  const [groupData, setGroupData] = useState(null)
  const [id, setId] = useState(props.id)

  useEffect(() => {
    async function getData () {
      console.log('rfafwe')
      const groupData = await getOneGroup(props.id)
      setGroupData(groupData)
    }
   getData()
  }, [props.id])






  return (
    <>
      {groupData ?
        <div className='group-page'>
          <div className='group-page-flex'>
            <Selector
              setId={setId}
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
