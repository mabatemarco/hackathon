import React, { Component } from 'react';
import { withRouter, Route, Switch, Link, useHistory } from "react-router";
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import { verifyUser, loginUser, registerUser } from './services/auth'

class App extends Component {
  state = {
    currentUser: null,
    authFormData: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: ""
    }
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser({ 'username': this.state.authFormData.username, 'password': this.state.authFormData.password });
    this.setState({
      currentUser
    })
    this.props.history.push("/");
  };

  handleRegister = async e => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({
      currentUser
    })
    this.props.history.push("/");
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
          <Route exact path='/login' render={() => (<Login
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            currentUser={this.state.currentUser}
            authFormData={this.state.authFormData}
          />)} />
          <Route exact path='/register' render={() => (<Register
            handleChange={this.handleChange}
            currentUser={this.state.currentUser}
            authFormData={this.state.authFormData}
            handleRegister={this.handleRegister}
          />)} />
        </div>
      </Switch>
    );
  }
}

export default withRouter(App);
