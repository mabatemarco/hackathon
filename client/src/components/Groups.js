import React, { Component } from 'react';
import '../css/Groups.css';
import OneGroup from './OneGroup';
import { getAllGroups } from '../services/apihelper.js';

class Groups extends Component {
  state = {
    allGroupsData: null
  }

  // making an axios call to DB to get allGroupsData then assigning the value in state
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
            <OneGroup
              id={onegroup.id}
              title={onegroup.title}
              description={onegroup.description}
              imageURL={onegroup.image}
              private={onegroup.private}
            />
        )
      })
    )
  }
}

export default Groups;
