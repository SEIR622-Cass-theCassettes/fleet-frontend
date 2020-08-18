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

		fetch('https://protected-refuge-14681.herokuapp.com/api/users', {
			method: 'POST',
			body: data,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='name'>Enter your full name</label>
				<input id='name' name='name' type='text' />

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