import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.LOGIN_MODE = "Login";
        this.SETUP_MODE = "Sign Up";
        this.state = {
            email: "",
            invalidEmail: false,
            mode: this.LOGIN_MODE
        };
        this.inputChanged = this.inputChanged.bind(this);
        this.switchModeTo = this.switchModeTo.bind(this);
        this.login = this.login.bind(this);
    }

    inputChanged(e) {
        this.setState({email: e.target.value})
    }

    validateEmail() {
        let emailPattern = /^.+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;
        return emailPattern.test(this.state.email);
    }

    switchModeTo(mode) {
        this.setState({mode: mode, invalidEmail: false})
    }

    login() {
        if (this.validateEmail()) {
            this.switchModeTo(this.LOGIN_MODE)
            this.props.setLoggedIn(true);
            this.setState({invalidEmail: false});
        } else {
            this.props.setLoggedIn(false);
            this.setState({invalidEmail: true});
        }
    }

    render() {
        let errorMessage = this.createLoggedInMessageElement();
        let loggedInMessage = this.createErrorMessageElement();
        let anchor = this.createAnchorElement();
        return (
            <div className="login">
                <div className="login__heading">{this.state.mode}</div>
                {errorMessage}
                {loggedInMessage}
                <input className="login__input" placeholder="Email" value={this.state.email} onChange={this.inputChanged} type="email"/>
                <button className="login__button" onClick={this.login}>{this.state.mode}</button>
                {anchor}
            </div>
        );
    }

    createLoggedInMessageElement() {
        if (this.props.isLoggedIn) {
            return (<div className="login__logged_in_message">You're now logged in!</div>);
        }
        return null;
    }

    createErrorMessageElement() {
        if (this.state.invalidEmail) {
            return (<div className="login__error_message">Invalid email...</div>);
        }
        return null;
    }

    createAnchorElement() {
        if (this.state.mode !== this.SETUP_MODE) {
            return (<div className="login__anchor" onClick={() =>this.switchModeTo(this.SETUP_MODE)}>Don't have an account? Register here</div>);
        }
    }
};

export default Login;