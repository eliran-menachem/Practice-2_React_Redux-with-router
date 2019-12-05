import React,{Component}from 'react';
import { connect } from 'react-redux';


class Home extends Component {
  render () {
    return(
        <div>
          Home
        </div>
    )
  }
} // End component About


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
)(Home)
