import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux';
import Users from './containers/Users';
import Accounts from './containers/Accounts';
import About from './containers/About';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from './containers/Login';
import User from './containers/User';


class App extends Component {
  render() {
    return <div className="container">
      <Router>
        <NavBar />

        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/user/:userID' component={User} />
          <Route path='/login' component={Login} />
          <Route path='/accounts' component={Accounts} />
          <Route path='/about' component={About} />
          <Route path='/' component={About} />
        </Switch>
      </Router>
    </div> // End of return
  } // End of render
} // End of comp App

const mapStateToProps = state => {
  return {
    users: state.usr.users,
    accounts: state.acc.accounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNewUser: () => dispatch({ type: 'EXAMPLE' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
