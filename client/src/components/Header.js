import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MyVerticallyCenteredModal from "../components/ProfileModal";
import searchIcon from '../images/search.png'

import "../css/Header.css";

export default function Header(props) {
  const [userData, setUserData] = useState(null);
  const [userWeather, setUserWeather] = useState(null);

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
                <Link to={`/groups/${userData.groups[0].id}`}>
                  <Dropdown.Item href="#/action-2">My groups</Dropdown.Item>
                </Link>
                <Dropdown.Item href="#/action-3">Messages</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Settings</Dropdown.Item>
                <Dropdown.Item variant="primary" onClick={(e) => props.handleLogout()}>
                  Sign out
            </Dropdown.Item>
              </DropdownButton>
            </div>
          ) : (
              <></>
            )
        )}
      <form onSubmit={(e) => { props.handleSearchSubmit(e) }} className='header-form'>
        <img className='search-icon' src={searchIcon} />
        <input onChange={(e) => { props.handleSearchChange(e) }} id="search-bar" placeholder="search"></input>
      </form>
    </div>
  );
}
