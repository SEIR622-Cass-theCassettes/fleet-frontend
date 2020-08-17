// Make a page that will allow a user to enter their email and password so they can create an account, allow users to add their first and last name
import React, { Component } from 'react';

class SignUp extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);

		fetch('/api/form-submit-url/users', {
			method: 'POST',
			body: data,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>

				<label htmlFor='email'>Enter your email</label>
				<input id='email' name='email' type='email' />

				<label htmlFor='password'>Enter your password</label>
				<input id='password' name='password' type='text' />

				<button>Create account</button>
			</form>
		);
	}
}

export default SignUp;