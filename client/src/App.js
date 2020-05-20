import React, { Component } from 'react';
import { withRouter, Route, Switch } from "react-router"; // removed Link and useHistory 
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Groups from './components/Groups'
import Group from './components/Group'
import Interests from './components/Interests'
import Header from './components/Header'
import { verifyUser, loginUser, registerUser } from './services/auth'
import { getOneUser, updateUser, } from './services/apihelper'

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
      if (userData.groups.length>0 && this.props.history.length<2) {
        this.props.history.push(`/groups/${userData.groups[0].id}`)
      } else if (this.props.history.length<2) {
        this.props.history.push('/groups')
      }
    }
    console.log(this.state.userData)
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
      this.props.history.push(`/groups/${userData.groups[0].id}`)
    } else {
      this.props.history.push('/groups')
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

  handleLogout = () => {
    this.setState({
      currentUser: null,
      userData: null
    })
    localStorage.removeItem('authToken')
    this.props.history.push('/')
  }

  hanldeUpdate = async e => {
    e.preventDefault();
    debugger
    const userData = await updateUser(this.state.userData.id, this.state.userData)
    this.setState({userData})
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
          userData={this.state.userData}
        />
      <Switch>
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
          <Route exact path='/profile/:id' render={() => (
            <Profile
            currentUser={this.state.currentUser}
              userData={this.state.userData}
              handleUpdate={this.hanldeUpdate}
            />
          )} />
          
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
      </Switch>
        </div>
    );
  }
}

export default withRouter(App);
