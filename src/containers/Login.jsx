import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginAction } from '../store/actions/usersActions';


class Login extends Component {

  UNSAFE_componentWillMount() {
    if (this.props.isLogged) {
      this.props.history.push('/');
    }
  }
  handlerLogin = (email, passward) => {
    this.props.login(email, passward)
    this.props.history.push('/');
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
    isLogged: state.usr.isLogged,
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
