import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ path, component: Component, isLogged, ...rest }) => {
    return (
      <Route path={path}{...rest} render={props =>{
          if(isLogged){
              return(
                  <Component {...props}{...rest}/>
              )
          }
          return <Redirect to="/login"/>
      }}/>
    )
}// End component PrivateRoute


const mapStateToProps = state => {
    return {
        isLogged: state.usr.isLogged,
        // users: state.usr.users,
        // accounts: state.acc.accounts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // addNewUser: () => dispatch({ type: 'EXAMPLE' })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateRoute)