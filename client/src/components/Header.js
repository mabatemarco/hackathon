import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/Header.css";

export default function Header(props) {
  const [userData, setUserData] = useState(props);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    console.log(props.userData);
    setUserData(props.userData);
    console.log(userData);
  });

  //function for the pop up profile
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <div id="pop-up-profile-main-info">
            <Modal.Title id="contained-modal-title-vcenter">
              {userData.username}\nJob Title\nLocation
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div id="pop-up-profile-contact-bar">
            <div id="email-column">
              <h4>Email</h4>
              <p>{userData.email}</p>
            </div>
            <div id="phone-column">
              <h4>Phone number</h4>
              <p>fooo-fooo</p>
            </div>
          </div>
          <div id="pop-up-profile-character-area">
            <h1>groups</h1>
            <div></div>
            <h1>Interests</h1>
            <div></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Link to={`/profile/${userData.id}`}>
            <Button onClick={props.onHide}>Update Profile</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div id="header">
      {userData ? (
        <div id="user-section">
          <img
            id="header-image"
            src="https://i.imgur.com/vndsQuF.jpg"
            alt="users photo"
          />
          <h1 id="user-title">{userData.username}</h1>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item variant="primary" onClick={() => setModalShow(true)}>
              Profile
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">My groups</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Messages</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-5" onClick={props.handleLogout}>Sign out</Dropdown.Item>
          </DropdownButton>
        
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      ) : (
        <></>
      )}
      <input id="search-bar" placeholder="search"></input>
    </div>
  );
}
