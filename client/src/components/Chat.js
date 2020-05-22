import React, { useState, useEffect } from 'react'
import '../css/Chat.css';
import Events from './Events'
import { createPost } from '../services/apihelper'
import { animateScroll } from 'react-scroll';
import icons from '../images/icons.png'


export default function Chat(props) {
  const [groupData, setGroupData] = useState(props.groupData)
  const [currentPost, setCurrentPost] = useState('')
  const [months, setMonths] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])

  useEffect(() => {
    setGroupData(props.groupData)
    setCurrentPost('')
    setTimeout(scrollToBottom, 500)
  }, [props])

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "chat",
      // smooth: 'easeInOutQuint'
    });
  }


  const handleChange = (e) => {
    setCurrentPost(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = await createPost(groupData.id, currentPost)
    console.log(newPost)
    let newPosts = [...groupData.posts, newPost]
    setCurrentPost('')
    setGroupData({
      ...groupData, posts: newPosts
    })
    scrollToBottom()
  }





  return (
    <div className='chat-container'>
      <div className='chat-title'>
        <h2>{groupData.title}</h2>
        <div className='chat-title-images'>
          <img src={icons} />
        </div>
      </div>

      <div className='chat-events'>
        <div id='chat' className='chat-window'>
          {groupData.posts.length>0 ? groupData.posts.map(post => {
            let showDate = months[parseInt(post.created_at.slice(5, 7))] + ' ' + post.created_at.slice(8, 10)
            let amPm = 'AM'
            let hour = post.created_at.slice(11, 13)-(props.timeZone/60)
            if (hour > 12) {
              hour -= 12;
              amPm = 'PM'
            }
            let min = post.created_at.slice(14, 16)

            return (
              <div className='chat-post'>
                <div className='chat-post-flex'>
                  <div className='chat-post-image'>
                    <img src={post.user.image ? post.user.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'} />
                  </div>
                  <div className='chat-post-post'>
                    <h6>{post.user.first_name} {post.user.last_name} ({post.user.title})</h6>
                    <p>{hour}:{min}{amPm} - {showDate}</p>
                  </div>
                </div>
                <div className='chat-post-post-content'>
                  <p>{post.post}</p>
                </div>
              </div>)
          }) :
            <div className='chat-post'>
              <h2>There's nothing here!  Get the conversation started.</h2>
            </div>
          }
        </div>

        <Events
          groupData={groupData}
          timeZone={props.timeZone}
          />
      </div>


      <div className='chat-bar'>
        <form onSubmit={handleSubmit}>
          <input value={currentPost} placeholder='Say Something!' onChange={handleChange} />
        </form>
      </div>
    </div>
  )
}
