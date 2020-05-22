import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MyVerticallyCenteredModal from "../components/ProfileModal";

import "../css/Header.css";

export default function Header(props) {
  const [userData, setUserData] = useState(props);
  const [userWeather, setUserWeather] = useState(props);

  useEffect(() => {
    setUserData(props.userData);
    setUserWeather(props.userWeather);  
  });

  return (
    <div id="header">
      {props.modalShow ? (
        <div>
          {/*<MyVerticallyCenteredModal
            userData={userData}
            userWeather={userWeather}
            show={props.modalShow}
            modalClosed={props.modalHandler}
          />
          */}
        </div>
      ) : (
       
     
      userData ? (
        <div id="user-section">
          <img
            id="header-image"
            src={userData.image}
            alt="users photo"
          />
          <h1 id="user-title">{userData.username}</h1>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item variant="primary" onClick={(e) => props.modalHandler(e)} >
              Profile
            </Dropdown.Item>

            <Dropdown.Item href="#/action-2">My groups</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Messages</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Settings</Dropdown.Item>
            <Dropdown.Item  variant="primary" onClick={(e) => props.handleLogout()}>
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
