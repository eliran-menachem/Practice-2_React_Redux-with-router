import React, { Component } from 'react';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    changeHandler = (property, value) => {
        let user = this.state.user;
        user[property] = value
        this.setState({ user })
    }// End of func

    handlerSubmit = (e) => {
        e.preventDefault();
        this.props.handlerLogin(this.state.user.email, this.state.user.password);

    }// End handlerSubmit func

    render() {
        return (
            <form className='col-md-4' onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <label htmlFor="idEmail">Email address</label>
                    <input type="email" value={this.state.user.email} onChange={(e) => (this.changeHandler('email', e.target.value))} className="form-control" id="idEmail" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted" >We will never share your email with anyone else.</small>

                </div>
                <div className="form-group">
                    <label htmlFor="idPass">Password</label>
                    <input type="password" value={this.state.user.password} onChange={(e) => (this.changeHandler('password', e.target.value))} className="form-control" id="idPass" autoComplete="true" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        )
    }
}

export default LoginForm;