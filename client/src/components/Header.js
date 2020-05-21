import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MyVerticallyCenteredModal from "../components/ProfileModal";

import "../css/Header.css";

export default function Header(props) {
  const [userData, setUserData] = useState(props);
  const [modalShow, setModalShow] = React.useState(false);
  const [userWeather, setUserWeather] = useState(props);

  useEffect(() => {
    setUserData(props.userData);
    setUserWeather(props.userWeather);
    console.log(userData);
    console.log(userWeather);
  });

  let modalHandler = (e) => {
    e.preventDefault();
    setModalShow(
       !modalShow
    )
  }



  return (
    <div id="header">
      {modalShow ? (
        <div>
          <MyVerticallyCenteredModal
            userData={userData}
            userWeather={userWeather}
            show={modalShow}
            modalClosed={modalHandler}
          />
         
        </div>
      ) : (
       
     
      userData ? (
        <div id="user-section">
          <img
            id="header-image"
            src="https://i.imgur.com/vndsQuF.jpg"
            alt="users photo"
          />
          <h1 id="user-title">{userData.username}</h1>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item variant="primary" onClick={() => setModalShow(true)} >
              Profile
            </Dropdown.Item>

            <Dropdown.Item href="#/action-2">My groups</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Messages</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-5" onClick={props.handleLogout}>
              Sign out
            </Dropdown.Item>
          </DropdownButton>
        </div>
      ) : (
        <></>
      )
      )}
      <input id="search-bar" placeholder="search"></input>
    </div>
  );
}
