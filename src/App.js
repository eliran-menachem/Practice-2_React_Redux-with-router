import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux';
import Users from './container/Users';
import Accounts from './container/Accounts';
import About from './container/About';
import NavBar from './component/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import navBar from './component/NavBar';

class App extends Component {
  render() {
    return <div className="container">
      <Router>
        <div>
          <NavBar />
        </div>

        <switch>
          <Route path='/users' component={Users} />
          <Route path='/accounts' component={Accounts} />
          <Route path='/about' component={About} />
        </switch>
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
    addNewUser: () => dispatch()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
