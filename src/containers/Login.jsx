import React,{Component}from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';


class Login extends Component {
  render () {
    return(
        <div>
        <LoginForm/>
        </div>
    )
  }
} // End component Login



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
)(Login)
