import React, { useState, useEffect } from 'react'
import '../css/Profile.css';


export default function Profile(props) {
  const [userData, setUserData] = useState(props)
  const [update, setUpdate] = useState(false)


  useEffect(() => {
    setUserData(props.userData)
  }, [])


  return (
    <div>
      <h1>{userData.username}'s Profile</h1>
      <button onClick={()=>setUpdate(true)}>Update Profile</button>
      {update === true ?
        <form
          id='update-profile-form'
          onSubmit={(e) => { props.handleupdate(e) }}
        >
          <label>
            Username:
          </label>
          <input placeholder={userData.username}></input>
          <label>
          First Name:
        </label>
        <input ></input>
        <label>
        Last Name:
      </label>
          <input ></input>
          <label>
        Email:
      </label>
          <input ></input>
        <label>
        Work Title:
      </label>
          <input></input>
          <label>
        State:
        </label>
          <input></input>
          <label>
         City:
        </label>
          <input></input>
          <label>
         Zip Code:
        </label>
          <input></input>
          <label>
         Profile Picture:
        </label>
          <input></input>
          <button>update</button>
          </form>
        :
        <></>
    }
    </div>
  )
}
