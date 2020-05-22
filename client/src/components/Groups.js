import React, { Component } from 'react';
import '../css/Groups.css';
import GroupCards from './GroupCards';
import { getAllGroups } from '../services/apihelper.js';
import AddGroupBox from './AddGroupBox';
import CreateGroup from './CreateGroup';
import Selector from './Selector';

class Groups extends Component {
  state = {
    allGroupsData: null,
    displayModal: false
  }

  // making an axios call to DB to get allGroupsData then assigning the value in state
  componentDidMount = async () => {
    const groupsData = await getAllGroups();
    this.setState({
      allGroupsData: groupsData
    })
  }

  clickHandler = () => {
    console.log('clicked');
    const displayModal = !this.state.displayModal;
    this.setState({ displayModal: displayModal })
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
                />
              </div>
            )
          })
        }
        {/* <div className="selectors">
          <Selector />
        </div> */}
        {
          this.state.displayModal ? <CreateGroup /> : null
        }
        <AddGroupBox clicked={this.clickHandler} />
      </div >
    )
  }
}

export default Groups;
