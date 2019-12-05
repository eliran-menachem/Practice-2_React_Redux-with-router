import React,{Component}from 'react';
import { connect } from 'react-redux';


class User extends Component {
  render () {
    return(
        <div>
          User
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
)(User)
