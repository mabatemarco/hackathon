import React, { useState, useEffect } from 'react';
import '../css/Groups.css';
import { getAllGroups } from '../services/apihelper.js';
import Group from './Group'

export default function Groups(props) {
  // Initializing allGroupsData in State with a value of 'null'
  const [allGroupsData, setAllGroupsData] = useState(null);

  // making an axios call to DB to get allGroupsData then reassigning the value in state
  useEffect(async () => {
    const allGroupsData = await getAllGroups();
    return setAllGroupsData(allGroupsData);
  }, [])

  return (
    props.allGroupsData.map(group => {
      return (
        <div className="group-list">
        
        </div>
      )
    })
  )
}
