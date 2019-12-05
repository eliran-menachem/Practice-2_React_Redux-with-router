import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginAction } from '../store/actions/usersActions';


class Login extends Component {

  handlerLogin = (email, passward) => {
    this.props.login(email, passward)
  }// End handlerLogin func

  render() {
    return (
      <div>
        <LoginForm handlerLogin={this.handlerLogin} />
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
    login: (email, passward) => dispatch(loginAction(email, passward))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
