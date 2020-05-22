import React, { useState, useEffect } from 'react'
import '../css/Group.css';
import { useLocation, withRouter } from 'react-router-dom'
import { getOneGroup } from '../services/apihelper.js'
import Selector from './Selector.js'
import Chat from './Chat.js'
import CreateGroup from './CreateGroup'
import CreateEvent from './CreateEvent'

export default function Group(props) {
  const [groupData, setGroupData] = useState(null)
  const [id, setId] = useState(props.id)
  const [create, setCreate] = useState(false)
  const [createEvent, setCreateEvent] = useState(false)


  useEffect(() => {
    async function getData() {
      const groupData = await getOneGroup(props.id)
      setGroupData(groupData)
    }
    getData()
  }, [props.id])

  const showCreate = () => {
    setCreate(!create)
  }

  const showEventCreate = () => {
    setCreateEvent(!createEvent)
  }

  const newEvent = (newOne) => {
    setGroupData({...groupData, events:[...groupData.events,newOne]})
  }

  return (
    <>
      {groupData && props.userData ?
        <div className='group-page'>
          {create &&
            <CreateGroup
            userData={props.userData}
            showCreate={showCreate}
            />}
          {createEvent&&
            <CreateEvent
            showEventCreate={showEventCreate}
            id={id}
            newEvent={newEvent}
            />
          }
          <div className='group-page-flex'>
            <Selector
              setId={setId}
              groupData={groupData}
              userData={props.userData}
              showCreate={showCreate}
              modalShow={props.modalShow}
              modalHandler={props.modalHandler}
              oneUser={props.oneUser}
            />
            <Chat
              groupData={groupData}
              timeZone={props.timeZone}
              showEventCreate={showEventCreate}
            />
          </div>
        </div>
        :
        <h2>no data</h2>
      }</>
  )
}
