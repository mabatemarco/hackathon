import React, { Component } from 'react';
import '../css/Groups.css';
import OneGroup from './OneGroup';
import { getAllGroups } from '../services/apihelper.js';
import Group from './Group'

class Groups extends Component {
  state = {
    allGroupsData: null
  }

  // making an axios call to DB to get allGroupsData then reassigning the value in state
  componentDidMount = async () => {
    const groupsData = await getAllGroups();
    this.setState({
      allGroupsData: groupsData
    })
  }


  render() {
    return (this.state.allGroupsData &&
      this.state.allGroupsData.map((onegroup) => {
        return (
          <div>
            <OneGroup
              className={'group-list'}
              id={onegroup.id}
              title={onegroup.title}
              description={onegroup.description}
              imageURL={onegroup.image}
              private={onegroup.private}
            />
          </div>
        )
      })
    )
  }
}

export default Groups;
