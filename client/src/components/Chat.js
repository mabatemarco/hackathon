import React, { useState, useEffect } from 'react'
import '../css/Chat.css';
import { createPost } from '../services/apihelper'
import { animateScroll } from 'react-scroll'


export default function Chat(props) {
  const [groupData, setGroupData] = useState(props.groupData)
  const [currentPost, setCurrentPost] = useState('')

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

  const sortedEvents = groupData.events.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='chat-container'>
      <div className='chat-title'>
        <h2>{groupData.title}</h2>
        <div className='.chat-title-images'>
        </div>
      </div>

      <div className='chat-events'>
        <div id='chat' className='chat-window'>
          {groupData.posts.map(post => (
            <div className='chat-post'>
              <div className='chat-post-image'>
                <img src={post.user.image ? post.user.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png'} />
              </div>
              <div className='chat-post-post'>
                <h6>{post.user.first_name} {post.user.last_name}</h6>
                <p>{post.post}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='events'>
          <h4>Upcoming Events</h4>
          {sortedEvents.map(event => {
            let showDate = event.date.slice(5, 7) + '/' + event.date.slice(8, 10) + '/' + event.date.slice(2, 4)
            let amPm = 'AM'
            let hour = event.date.slice(11, 13)
            if (hour > 12) {
              hour -= 12;
              amPm='PM'
            }
            let min= event.date.slice(14,16)
            return (
                <div className='chat-event-event'>
                  <h5>{showDate} - {hour}:{min} {amPm}</h5>
                  <h4>{event.title}</h4>
                  <div className='chat-event-event-link'>
                    <a href={event.zoom}>{event.zoom}</a>
                    </div>
                </div>
              )
          })}
        </div>
      </div>


      <div className='chat-bar'>
        <form onSubmit={handleSubmit}>
          <input value={currentPost} onChange={handleChange} />
        </form>
      </div>
    </div>
  )
}
