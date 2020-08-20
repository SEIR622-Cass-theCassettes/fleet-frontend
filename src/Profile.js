// Create a page that will allows users to update their email, password and name. Make sure a user cannot save without a name, email and password. Make sure you have a password confirm field.import React, { Component } from 'react';
import React, { Component } from 'react';
import { Button, Form, Container, Modal, Row, Col } from 'react-bootstrap';
import EmailValidator from 'email-validator';
import { FleetBackend } from './api/FleetBackend';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			newEmail: undefined,
			newName: undefined,
			newPassword: undefined,
			newPasswordConfirm: undefined,
			show: false,
		};
	}

	componentDidMount() {
		FleetBackend()
			.get(`users/${this.props.userEmail}`)
			.then((results) => {
				let data = results.data;
				this.setState({ name: data.name, email: data.email, id: data['_id'] });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleShow = () => {
		if (this.state.newName === undefined) {
			this.setState({ newName: this.state.name, newEmail: this.state.email });
		}
		this.setState({ show: true });
	};

	handleClose = () => this.setState({ show: false });

	handleSubmit = (event) => {
		event.preventDefault();
		let newUser = {
			email: this.state.newEmail,
			name: this.state.newName,
		};
		if (
			this.state.newPassword !== undefined &&
			this.state.newPassword === this.state.newPasswordConfirm
		) {
			newUser.password = this.state.newPassword;
		}

		let updatedEmailOrPassword =
			newUser.password !== undefined ||
			sessionStorage.getItem('userEmail') !== newUser.email;

			console.log(newUser);
		FleetBackend()
			.put(`users/${this.state.id}`, newUser)
			.then((results) => {
				this.handleClose();
				let data = results.data;
				this.setState({ name: data.name });
				if (updatedEmailOrPassword) {
					sessionStorage.removeItem('token');
					sessionStorage.removeItem('userEmail');
					this.setState({ userInfo: undefined, userEmail: undefined });
					window.location = '/';
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		return (
			<Container>
				<Container>
					<Row>
						<Col>
							<h2>Email: {this.state.email}</h2>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2>Name: {this.state.name}</h2>
						</Col>
					</Row>
					<Row>
						<Button onClick={this.handleShow}>Edit</Button>
					</Row>
				</Container>
				<Container>
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Edit Profile</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId='name'>
									<Form.Label>Enter your Full Name</Form.Label>
									<Form.Control
										type='text'
										placeholder='Full Name'
										required
										name='newName'
										value={`${this.state.newName}`}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='text'
										placeholder='Email'
										required
										name='newEmail'
										value={this.state.newEmail}
										isInvalid={
											this.state.newEmail !== undefined &&
											!EmailValidator.validate(this.state.newEmail)
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
										name='newPassword'
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId='passwordConfirm'>
									<Form.Label>Password Confirm</Form.Label>
									<Form.Control
										type='password'
										placeholder='Password Confirm'
										name='newPasswordConfirm'
										onChange={this.handleChange}
										isInvalid={
											this.state.newPasswordConfirm !== undefined &&
											this.state.newPassword !== this.state.newPasswordConfirm
										}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button type='submit' onClick={this.handleSubmit}>
								Submit
							</Button>
							<Button variant='secondary' onClick={this.handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Container>
			</Container>
		);
	}
}

export default Profile;
