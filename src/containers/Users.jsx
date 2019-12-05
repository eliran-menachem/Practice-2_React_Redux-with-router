import React,{Component}from 'react';
import { connect } from 'react-redux';


class Users extends Component {
  render () {
    return(
        <div>
          Users
        </div>
    )
  }
} // End component User

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
)(Users)
