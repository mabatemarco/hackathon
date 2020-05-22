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
    }
  }
  componentDidMount = async () => {
    const weather = await getCityWeather('new york')
    const userWeather = weather.weather[0].icon
    this.setState({
      userWeather
    })
   
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
            <img id='pop-up-hero-image' src='https://cdn.zeplin.io/5ec5534c53feee488e048301/assets/720E56FF-D5F0-4CBD-8CE5-08A4F4B40325.png'/>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
                <img id='pop-up-weather-icon'src={`http://openweathermap.org/img/wn/${this.state.userWeather}@2x.png`} />
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
                <h1 class='pop-up-interest-box'>Movies</h1>
                <h1 class='pop-up-interest-box'>Rock Climbing</h1>
                <h1 class='pop-up-interest-box'>Volunteering</h1>
                <h1 class='pop-up-interest-box'>Gardening</h1>
                <h1 class='pop-up-interest-box'>Chess</h1>
                <h1 class='pop-up-interest-box'>Magic</h1>
                </div>
                <button id='pop-up-message-button'>Message</button>
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