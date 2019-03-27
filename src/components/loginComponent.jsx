import React from 'react';
export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        const app = this;

        let username = app.refs.username.value;
        let password = app.refs.password.value;

        app.props.validateLogin(username, password);
    }

    render() {
        const app = this;

        return (
            <div className="[ row ]">
                <div className="[ col-sm-6 ] [ col-centered ]">
                    <div className="[ login ]">
                        <h1>Login</h1>
                        <form className="[ login__form ]" ref="loginForm">
                            <div className="[ form-group ]">
                                <label>Username:</label>
                                <input type="text" className="[ form-control ]" id="username" ref="username" placeholder="Enter Username"></input>
                                <span className="[ login__error ]">{this.props.usernameError}</span>
                            </div>
                            <div className="[ form-group ]">
                                <label>Password:</label>
                                <input type="password" className="[ form-control ]" id="password" ref="password" placeholder="Enter Password"></input>
                                <span className="[ login__error ]">{this.props.passwordError}</span>
                            </div>
                            <button type="submit" class="[ btn btn-primary ]" onClick={app.handleLogin}>Submit <i class="far fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}