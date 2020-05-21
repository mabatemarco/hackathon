import React, { Component } from 'react';
import '../css/Groups.css';
import GroupCards from './GroupCards';
import { getAllGroups } from '../services/apihelper.js';
import AddGroupBox from './AddGroupBox';

class Groups extends Component {
  state = {
    allGroupsData: null, 

  }

  // making an axios call to DB to get allGroupsData then assigning the value in state
  componentDidMount = async () => {
    const groupsData = await getAllGroups();
    this.setState({
      allGroupsData: groupsData
    })
  }


  render() {
    return (<div className="groups-layout"> {
      this.state.allGroupsData &&
      this.state.allGroupsData.map((onegroup) => {
        return (
          <div className="group-cards-container">
            <GroupCards
              key={onegroup.id}
              id={onegroup.id}
              title={onegroup.title}
              description={onegroup.description}
              imageURL={onegroup.image}
              private={onegroup.private}
            />
          </div>
        )
      })
    }
      <AddGroupBox />
    </div >
    )
  }
}

export default Groups;
