import React, { useState } from 'react'
import{withRouter} from 'react-router-dom'
import { createEvent } from '../services/apihelper'
import '../css/CreateEvent.css'

function CreateEvent(props) {
  const [event, setEvent] = useState({ title: '', date: '', time:'15:00', zoom: '' })


  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent({ ...event, [name]: value })
  }

  const handleSubmit = async () => {
    const date = new Date(event.date +' '+ event.time)
    console.log(date)
    const response = await createEvent(props.id,{title:event.title,date:date,zoom:event.zoom})
    props.newEvent(response)
    props.showEventCreate()
  }

  return (
    <div className='create-event'>
      <div className='create-event-header'>
        <h2>Create New event</h2>
        <span onClick={props.showEventCreate}>X</span>
      </div>
      <div className='create-event-title'>
        <form>
          <div className='create-event-set'>
            <h4>What's your event?</h4>
            <input name='title' onChange={handleChange} placeholder='Give your event a title' />
          </div>
          <div className='create-event-set'>
            <h4>When is this happening</h4>
            <div className='create-event-datetime'>
            <input  name='date' type='date' onChange={handleChange} />
              <input  name='time' type='time' value={event.time} step='60' onChange={handleChange} />
              </div>
            
          </div>
          <div className='create-event-set'>
            <h4>Add a zoom link</h4>
            <input name='zoom' onChange={handleChange} placeholder="Let's meet up online" />
          </div>
        </form>
      </div>
      <button onClick={handleSubmit} className='create-event-submit'>Create Event</button>
    </div>
  )
}

export default withRouter(CreateEvent)