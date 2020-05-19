import React, {useState} from 'react'
import { getOneGroup } from '../services/apihelper.js'
import Selector from './Selector.js'
import Chat from './Chat.js'
import Events from './Events.js'

export default function Group() {
  const [groupData, setGroupData] = useState(null)
  
  // useEffect(() => {
  //   const groupData = getOneGroup()
  //   setGroupData(groupData)
  // }, [])

  return (
    <div>
      
    </div>
  )
}
