import React, { Component } from 'react';
import '../css/Groups.css';
import GroupCards from './GroupCards';
import { getAllGroups } from '../services/apihelper.js';
import AddGroupBox from './AddGroupBox';
import CreateGroup from './CreateGroup';

class Groups extends Component {
  state = {
    allGroupsData: null,
    displayModal: false
  }

  // making an axios call to DB to get allGroupsData then assigning the value in state
  componentDidMount = async () => {
    const groupsData = await getAllGroups();
    let userGroups = this.props.userData.groups.map(group => (
      group.id
    ))
    let selectedGroups = groupsData.filter(group => {
      return !userGroups.includes(group.id)
    })
    let allGroupsData=[];
    for (let i = 0; i < Math.min(5,selectedGroups.length); i++){
      allGroupsData.push(selectedGroups[i])
    }
    this.setState({
      allGroupsData
    })
  }

  clickHandler = () => {
    console.log('clicked');
    const displayModal = !this.state.displayModal;
    this.setState({ displayModal: displayModal })
  }

  showCreate = () => {
    this.setState(prevState => ({
      displayModal: !prevState.displayModal
    }))
  }


  render() {
    return (
      <div className="groups-layout">
        {this.state.allGroupsData &&
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
                  getUserData={this.props.getUserData}
                />
              </div>
            )
          })
        }
        {
          this.state.displayModal ? <CreateGroup userData={this.props.userData} showCreate={this.showCreate}/> : null
        }
        <AddGroupBox clicked={this.showCreate} />
      </div >
    )
  }
}

export default Groups;
