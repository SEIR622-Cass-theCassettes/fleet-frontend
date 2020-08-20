// Create a page or modal that when clicked allows a user to enter their email and password and it allows them to be logged in.
import React, { Component } from 'react';
import { FleetBackend } from './api/FleetBackend';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import EmailValidator from 'email-validator';
import './styles/Containers.css';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			.post('users/signin', {
				email: this.state.email,
				password: this.state.password,
			})
			.then((response) => {
				sessionStorage.setItem('token', response.data.token);
				sessionStorage.setItem('userEmail', this.state.email);
				window.location = '/';
			})
			.catch((error) => {
				this.setState({ error: true, errorMessage: 'Login Failed' });
			});
	};

	render() {
		return (
			<Container className='mainContainer'>
				<Row>
					<Col>
						<h1 className='text-center'>Login</h1>
					</Col>
				</Row>
				<Form onSubmit={this.handleSubmit}>
					<Form.Row>
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
						</Form.Group>
					</Form.Row>
					<Form.Row>
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
					</Form.Row>
					{this.state.error && (
						<Row style={{ marginBottom: '8px' }}>
							<Col style={{ color: 'red' }}>Login Failed</Col>
						</Row>
					)}
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default SignIn;
