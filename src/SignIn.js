// Create a page or modal that when clicked allows a user to enter their email and password and it allows them to be logged in.
import React, { Component } from 'react';
import { FleetBackend } from './api/FleetBackend';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: false,
			errorMessage: undefined,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		FleetBackend()
			.post('users/signin', {
				email: this.state.email,
				password: this.state.password,
			})
			.then((response) => {
				this.setState({ error: false });
				window.location = '/users/signIn';
			})
			.catch((error) => {
				this.setState({ error: true, errorMessage: error.response.data });
			});
	};

	render() {
		const { email, password } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					name='email'
					type='text'
					placeholder='Enter your email'
					value={email}
					onChange={this.handleChange}
				/>
				<label htmlFor='email'>Password</label>
				<input
					name='password'
					type='password'
					placeholder='Enter your password'
					value={password}
					onChange={this.handleChange}
				/>
				<button type='submit'>Login</button>
				{this.state.error && (
					<div style={{ color: 'red' }}>{this.state.errorMessage}</div>
				)}
			</form>
		);
	}

}

export default SignIn;
