import React, { Component } from 'react';
import { withRouter, Route, Switch, Link, useHistory } from "react-router";
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'

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
  
  
  render() {
    return (
      <Switch>
      <div className="App">
        <Route exact path='/' render={() => (<Landing/>)} />
        <Route exact path='/login' render={() => (<Login
            currentUser={this.state.currentUser}
            authFormData={this.state.authFormData}
        />)} />
        <Route exact path='/register' render={() => (<Register
          currentUser={this.state.currentUser}
          authFormData={this.state.authFormData}
        />)} />
        </div>
        </Switch>
    );
  }
}

export default withRouter(App);
