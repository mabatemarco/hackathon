import React, { useState, useEffect } from 'react'
import '../css/Group.css';
import { useLocation, withRouter } from 'react-router-dom'
import { getOneGroup } from '../services/apihelper.js'
import Selector from './Selector.js'
import Chat from './Chat.js'
import CreateGroup from './CreateGroup'

export default function Group(props) {
  const [groupData, setGroupData] = useState(null)
  const [id, setId] = useState(props.id)
  const [create, setCreate] = useState(false)


  useEffect(() => {
    async function getData() {
      console.log('rfafwe')
      const groupData = await getOneGroup(props.id)
      setGroupData(groupData)
    }
    getData()
  }, [props.id])

  const showCreate = () => {
    setCreate(!create)
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
          <div className='group-page-flex'>
            <Selector
              setId={setId}
              groupData={groupData}
              userData={props.userData}
              showCreate={showCreate}
            />
            <Chat
              groupData={groupData}
              timeZone={props.timeZone}
            />
          </div>
        </div>
        :
        <h2>no data</h2>
      }</>
  )
}
