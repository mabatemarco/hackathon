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
  const [suggestions, setSuggestions] = useState([])


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

  const randos=() => {
    let arr = []
    for (let i = 0; i < 3; i++) {
      let firstRand = Math.floor(Math.random() * props.userData.groups.length)
      let secondRand = Math.floor(Math.random() * props.userData.groups[firstRand].members.length)
      arr.push(props.userData.groups[firstRand].members[secondRand].user.image)
    }
    setSuggestions(arr)
    setCreate(true)
  }


  return (
    <>
      {groupData && props.userData ?
        <div className='group-page'>
          {create &&
            <CreateGroup
            userData={props.userData}
            suggestions={suggestions}
            />}
          <div className='group-page-flex'>
            <Selector
              setId={setId}
              groupData={groupData}
              userData={props.userData}
              showCreate={showCreate}
              randos={randos}
              modalShow={props.modalShow}
              modalHandler={props.modalHandler}
              oneUser={props.oneUser}
            />
            <Chat
              groupData={groupData}
            />
          </div>
        </div>
        :
        <h2>no data</h2>
      }</>
  )
}
