import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Backdrop from '../components/Backdrop'
import "../css/PopUpProfile.css";
import {getCityWeather} from '../services/weatherApi'

class MyVerticallyCenteredModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      oneUser: props.oneUser,
      userData: props.userData,
      userWeather: props.userWeather,
      oneUser: null,
      selectedUserWeather: null,
    }
  }
  componentDidMount = async () => {
    const weather = await getCityWeather('new york')
    const selectedUserWeather = weather.weather[0].icon
    this.setState({
      selectedUserWeather
    })
    console.log(this.state.userData)
    console.log(this.state.oneUser)
    console.log(this.state.id)
  }
  


  render() {
    return (
      
          <div id='pop-up-profile'  style={{
            transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity :this.props.show ? 1 : 0
      }}>
        {this.state.userData.id ?
          <div>
          <Modal.Header>
            <div id="profile-image">
              <div class="progress-circle p45">
                <span>
                  <img
                    src={this.state.userData.image}
                    alt=""
                  />
                </span>
                <div class="left-half-clipper">
                  <div class="first50-bar"></div>
                  <div class="value-bar"></div>
                </div>
              </div>
            </div>
            <div id="profile-title-info">
              <p id='username'>{this.state.userData.username}</p>
              <p id='job-title'>{this.state.userData.title}</p>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div id="pop-up-profile-contact-bar">
              <div id="email-column">
                <p id='email'>{this.state.userData.email}</p>
                <p id='phone-number'>(123)456-7891</p>
              </div>
              <div id="icon-column">
                <img src={`http://openweathermap.org/img/wn/${this.state.userWeather}@2x.png`} />
              </div>
            </div>
            <div id="pop-up-profile-character-area">
              <h1 id='groups-title'>groups</h1>
              <div id='group-area'>
                <div class='group-column'>
                  <img class='group-picture' src='https://wallpaperplay.com/walls/full/1/9/c/216164.jpg' />
                  <p class='group-title'>Runners Club</p>
                </div>
                <div class='group-column'>
                  <img class='group-picture' src='https://static.boredpanda.com/blog/wp-content/uploads/2015/09/cats-and-dogs-getting-along-39__605.jpg' />
                  <p class='group-title' >Pets Club</p>
                </div>
                <div class='group-column'>
                  <img class='group-picture' src='https://cdn.abcotvs.com/dip/images/5290492_050819-wtvd-meth-in-legos-main-vid.jpg?w=800&r=16%3A9' />
                  <p class='group-title' >Lego Club</p>
                </div>
              </div>
              <h1 id='interest-title'>Interests</h1>
              <div id='interest-area'>
              
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
             
          </Modal.Footer>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
          </div>
            
          :
          (<></>)
           
        }
          </div>
    )
  }
}

export default MyVerticallyCenteredModal;