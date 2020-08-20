// Make a page that will allow a user to enter their email and password so they can create an account, allow users to add their first and last name
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FleetBackend } from './api/FleetBackend';
import EmailValidator from 'email-validator';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			name: undefined,
			email: undefined,
			password: undefined,
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
			.post('users/signup', {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
			})
			.then((response) => {
				window.location = '/signIn';
			})
			.catch((error) => {
				this.setState({ error: true, errorMessage: error.response.data });
			});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId='name'>
					<Form.Label>Enter your Full Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Full Name'
						required
						name='name'
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='text'
						placeholder='Email'
						required
						name='email'
						isInvalid={
							this.state.email !== undefined &&
							!EmailValidator.validate(this.state.email)
						}
						onChange={this.handleChange}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						required
						name='password'
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='passwordConfirm'>
					<Form.Label>Password Confirm</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password Confirm'
						required
						name='passwordConfirm'
						onChange={this.handleChange}
						isInvalid={
							this.state.passwordConfirm !== undefined &&
							this.state.password !== this.state.passwordConfirm
						}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		);
	}
}

export default SignUp;
