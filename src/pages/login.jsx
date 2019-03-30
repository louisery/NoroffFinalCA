import React from 'react';
import LoginComponent from './../components/loginComponent';

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isUsername: false,
			isPassword: false
		}
		this.testUserDetails = this.testUserDetails.bind(this);

	}

	loginDetails() {
		localStorage.setItem('username', 'User');
		localStorage.setItem('password', '@User123');
	}

	testUserDetails(username, password) {
		let app = this;

		if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
			sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
			app.props.history.push('/home');
		}
		if (localStorage.getItem('username') !== username) {
			app.setState({ isUsername: 'Please enter a valid username' });
		}
		if (localStorage.getItem('password') !== password) {
			app.setState({ isPassword: 'Please enter a valid password' });
		}
	}

	render() {
		let app = this;
		app.loginDetails();

		return (
			<LoginComponent
				validateLogin={app.testUserDetails}
				usernameError={app.state.isUsername}
				passwordError={app.state.isPassword}
			>
			</LoginComponent>
		);
	}
}