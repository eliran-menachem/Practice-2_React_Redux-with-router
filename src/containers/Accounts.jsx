import React,{Component}from 'react';
import { connect } from 'react-redux';


class Accounts extends Component {
  render () {
    return(
        <div>
          Accounts
        </div>
    )
  }
} // End component Accounts



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
)(Accounts)