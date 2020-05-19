import React, { useState, useEffect } from 'react'
import '../css/Chat.css';
import { createPost } from '../services/apihelper'


export default function Chat(props) {
  const [groupData, setGroupData] = useState(props.groupData)
  const [currentPost, setCurrentPost] = useState('')

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
  }

  return (
    <div className='chat'>
      <h2>{groupData.title}</h2>
      <div className='chat-window'>
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
      <div className='chat-bar'>
        <form onSubmit={handleSubmit}>
          <input value={currentPost} onChange={handleChange} />
          <button>Post</button>
        </form>
      </div>
    </div>
  )
}