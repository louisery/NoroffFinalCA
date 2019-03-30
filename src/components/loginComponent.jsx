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
                <div className="[ col-sm-4 ] [ col-centered ]">
                    <h1>Login</h1>
                    <div className="[ login ]">
                        <form className="[ login__form ]" ref="loginForm">
                            <div className="[ form-group ]">
                                <label><i class="fas fa-user"></i> Username:</label>
                                <input type="text" className="[ form-control ]" id="username" ref="username" placeholder="Enter Username"></input>
                                <span className="[ login__error ]"><i>{this.props.usernameError}</i></span>
                            </div>
                            <div className="[ form-group ]">
                                <label><i class="fas fa-unlock-alt"></i> Password:</label>
                                <input type="password" className="[ form-control ]" id="password" ref="password" placeholder="Enter Password"></input>
                                <span className="[ login__error ]"><i>{this.props.passwordError}</i></span>
                            </div>
                            <div className="[ text-center ]">
                                <button type="submit" class="[ btn ] [ login__button ]" onClick={app.handleLogin}>Submit <i class="far fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}