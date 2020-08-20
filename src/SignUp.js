// Make a page that will allow a user to enter their email and password so they can create an account, allow users to add their first and last name
import React, { Component } from 'react';
import { FleetBackend } from './api/FleetBackend';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
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

	handleSubmit(event) {
		event.preventDefault();
		FleetBackend()
			.post('users/signup', {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
			})
			.then((response) => {
				console.log(response);
				this.setState({ error: false });
			})
			.catch((error) => {
				this.setState({ error: true, errorMessage: error.response.data });
			});
	}

	render() {
		const { name, email, password } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='name'>Enter your full name</label>
				<input
					id='name'
					name='name'
					type='text'
					placeholder='Enter your name'
					value={name}
					onChange={this.handleChange}
				/>
				<label htmlFor='email'>Enter your email</label>
				<input
					id='email'
					name='email'
					type='email'
					placeholder='Enter your email'
					value={email}
					onChange={this.handleChange}
				/>

				<label htmlFor='password'>Enter your password</label>
				<input
					id='password'
					name='password'
					type='text'
					placeholder='Enter your password'
					value={password}
					onChange={this.handleChange}
				/>

				<button type='submit'>Create account</button>
			</form>
		);
	}
}

export default SignUp;
