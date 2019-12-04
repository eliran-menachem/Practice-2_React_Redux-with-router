import React from 'react'
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return <div /> // End of return
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
