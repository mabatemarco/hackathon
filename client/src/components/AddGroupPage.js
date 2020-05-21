import React from 'react'

const AddGroupPage = () => {
  return (
    <div>
      <h1>Add New Group</h1>
      <div className="suggestion">
        <h2>Suggested Group</h2>
      </div>
      <div onClick={props} className="create-new-group">
        <h2>Create New Group</h2>
      </div>
    </div>
  )
}

export default AddGroupPage