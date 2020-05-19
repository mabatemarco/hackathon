import React, { Component } from 'react';
import { withRouter, Route, Switch, Link, useHistory } from "react-router";
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Groups from './components/Groups'
import Group from './components/Group'
import Interests from './components/Interests'
import { verifyUser, loginUser, registerUser } from './services/auth'
import { getOneUser } from './services/apihelper'

class App extends Component {
  state = {
    currentUser: null,
    authFormData: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: ""
    },
    userData: null
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      const userData = await getOneUser(currentUser.id)
      this.setState({
        userData
      })
      if (userData.groups.length>0) {
        this.props.history.push(`groups/${userData.groups[0].id}`)
      } else {
        this.props.history.push('groups')
      }
    }
    console.log(currentUser)
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser({ 'username': this.state.authFormData.username, 'password': this.state.authFormData.password });
    console.log(currentUser)
    const userData = await getOneUser(currentUser.id)
    this.setState({
      userData
    })
    if (userData.groups.length>0) {
      this.props.history.push(`groups/${userData.groups[0].id}`)
    } else {
      this.props.history.push('groups')
    }
  };

  handleRegister = async e => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({
      currentUser
    })
    this.props.history.push("/interests");
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <Switch>
        <div className="App">
          <Route exact path='/' render={() => (<Landing />)} />
          <Route exact path='/login' render={() =>
            (<Login
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
              currentUser={this.state.currentUser}
              authFormData={this.state.authFormData}
            />)} />
          <Route exact path='/register' render={() => (
            <Register
              handleChange={this.handleChange}
              currentUser={this.state.currentUser}
              authFormData={this.state.authFormData}
              handleRegister={this.handleRegister}
            />)} />
          <Route exact path='/groups' render={() => (
            <Groups
              currentUser={this.state.currentUser}
              userData={this.state.userData}
            />
          )} />
          <Route exact path='/groups/:id' render={(props) => (
            <Group
              currentUser={this.state.currentUser}
              userData={this.state.userData}
              id={props.match.params.id}
            />
          )} />
          <Route exact path='/interests' render={(props) => (
            <Interests
              currentUser={this.state.currentUser}
              userData={this.state.userData}
            />
          )} />
        </div>
      </Switch>
    );
  }
}

export default withRouter(App);
