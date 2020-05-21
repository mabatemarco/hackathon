import React, { useState, useEffect } from 'react'
import '../css/CreateGroup.css';
import { createGroup } from '../services/apihelper';
import {withRouter} from 'react-router-dom'

function CreateGroup(props) {
  const [group, setGroup] = useState({ title: '', image: '' })


  const handleChange = (e) => {
    const { name, value } = e.target
    setGroup({ ...group, [name]: value })
  }

  const handleSubmit = async () => {
    const response = await createGroup(group)
    console.log(response)
    props.history.push(`/groups/${response.id}`);
    window.location.reload(false);
  }

  return (
    <div className='create-group'>
      <div className='create-group-header'>
        <h2>Create New Group</h2>
      </div>
      <div className='create-group-title'>
        <form>
          <div className='create-group-set'>
            <h4>What's your group's theme?</h4>
            <input name='title' onChange={handleChange} placeholder='What are you excited about?' />
          </div>
          <div className='create-group-set'>

            <h4>Represent with a photo</h4>
            <input name='image' onChange={handleChange} placeholder='If your group were a picture, what would it be?' />
          </div>
        </form>
      </div>
      <div className='create-group-people'>
        <h3>We found some people who might be interested</h3>
        <div className='create-group-people-people'>
          {props.suggestions.map(person => {
            let rand = Math.floor(Math.random() * 25) + 70
            return (
              <div className='create-group-people-person'>
                <div className={`progress-circle p${rand}`}>
                  <span><img src={person} alt="" /></span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <p className='create-group-people-person-percent'>{rand}%</p>
                <button>Add to Group</button>
              </div>)
          })}
        </div>
      </div>
      <div className='create-group-set'>

        <h4>Anyone Else</h4>
        <input placeholder='Add names or email addresses' />
      </div>
      <button onClick={handleSubmit} className='create-group-submit'>Create Group</button>
    </div>
  )
}

export default withRouter(CreateGroup)