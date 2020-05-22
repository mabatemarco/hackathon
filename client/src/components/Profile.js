import React, { Component } from 'react'
import {getCityWeather} from '../services/weatherApi'
import { getOneUser } from '../services/apihelper'

import '../css/Profile.css';


export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      userData: null,
      userWeather: null,
}
  }

  componentDidMount = async () => {
    const userData = await getOneUser(this.props.id)
    const userWeather = await getCityWeather(userData.city)
    this.setState({
      userData,
      userWeather
    })
    console.log(this.state.userData)
  }


  profile = () => {
    let profileDiv= null
    this.state.userData ? 
      profileDiv = (
        <div id='profile-page'>
          <img id='city-image' src='https://www.mypaleos.com/wp-content/uploads/2017/03/Albany.jpg' />
          <div id='title-info-bar'>
          <h1 id='profile-username'>{this.state.userData.username}</h1>
            <h1 id='profile-user-title'>{this.state.userData.title}</h1>
            </div>
          <div id='user-profile-image'>
          <div class="progress-circle p54" >
  <span><img id="user-image" src='https://reason.org/wp-content/uploads/2018/01/guybentley.jpg' alt="" /></span>
  <div class="left-half-clipper">
    <div id='first-bar' class="first50-bar"></div>
    <div id='value-bar' class="value-bar"></div>
  </div>
            </div>
            </div>
          <h1 id='profile-email'>{this.state.userData.email}</h1>
          <div id='icon-section'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
          <img id='weather-icon' src={`http://openweathermap.org/img/wn/${this.state.userWeather.weather[0].icon}@2x.png`} />
          </div>
            <div id='about-user-section'>
            <h1 id='profile-groups-title'>Groups</h1>
              <div id='profile-group-area'>
                <div class='profile-group-column'>
                  <img class='profile-group-picture' src='https://wallpaperplay.com/walls/full/1/9/c/216164.jpg' />
                  <p class='profile-group-title'>Runners Club</p>
                </div>
                <div class='profile-group-column'>
                  <img class='profile-group-picture' src='https://static.boredpanda.com/blog/wp-content/uploads/2015/09/cats-and-dogs-getting-along-39__605.jpg' />
                  <p class='profile-group-title' >Pets Club</p>
                </div>
                <div class='profile-group-column'>
                  <img class='profile-group-picture' src='https://cdn.abcotvs.com/dip/images/5290492_050819-wtvd-meth-in-legos-main-vid.jpg?w=800&r=16%3A9' />
                  <p class='profile-group-title' >Lego Club</p>
              </div>
              </div>
            <h1 id='profile-interest-title'>Interest</h1>
            <div id='profile-interest-area'>
              <h1 class='profile-interest-box'>Movies</h1>
              <h1 class='profile-interest-box'>Rock Climbing</h1>
              <h1 class='profile-interest-box'>Volunteering</h1>
              <h1 class='profile-interest-box'>Gardening</h1>
              <h1 class='profile-interest-box'>Chess</h1>
              <h1 class='profile-interest-box'>Magic</h1>
            </div>
          </div>
          <button id='message-button'>Message</button>
        </div>
   )  
      :
      profileDiv = (
        <h1>Loading...</h1>
      )
    
    return profileDiv
  }

  render() {
    return (
      <div>
       {this.profile()}
        
      </div>
    )
}
  
}
