import React, { useState, useEffect } from 'react';
import plus from '../images/Plus and circle@3x.png'

export default function Events(props) {
  const [groupData, setGroupData] = useState(props.groupData)
  const [months, setMonths] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])

  useEffect(() => {
    setGroupData(props.groupData)
  }, [props])

  const sortedEvents = groupData.events.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='events-container'>
      <div className='events'>
        <h4 className='events-h4'>Upcoming Events</h4>
        {sortedEvents.length > 0 ? sortedEvents.map(event => {
          let showDate = months[parseInt(event.date.slice(5, 7))] + ' ' + event.date.slice(8, 10)
          let amPm = 'AM'
          let hour = event.date.slice(11, 13) - (props.timeZone / 60)
          if (hour > 12) {
            hour -= 12;
            amPm = 'PM'
          }
          let min = event.date.slice(14, 16)
          return (
            <div className='chat-event-event'>
              <h4>{event.title}</h4>
              <h5>{showDate}, {hour}:{min}{amPm}</h5>
              <a href={event.zoom}>Zoom link</a>
            </div>
          )
        }) :
          <div className='chat-event-event'>
            <h3 style={{textAlign: 'center'}}>No upcoming events. Plan something!</h3>
          </div>
        }
      </div>
      <div id="event-add" className='chat-event-event'>
        <img onClick={props.showEventCreate} src={plus} />
      </div>
    </div >
  )
}
