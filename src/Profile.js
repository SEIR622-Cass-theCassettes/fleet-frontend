// Create a page that will allows users to update their email, password and name. Make sure a user cannot save without a name, email and password. Make sure you have a password confirm field.import React, { Component } from 'react';
import React, { Component } from 'react';
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Submitting');
		console.log(this.state);
	};
	render() {
		const { name, email, password, passwordConfirm } = this.state;
		return (
			<div>
                <h1>Update your information here</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='name'>Name</label>
					<br />
					<input
						type='text'
						id='name'
						name='name'
						value={name}
						onChange={this.handleChange}
						required
					/>
					<br />
					<label htmlFor='email'>Email</label>
					<br />
					<input
						type='text'
						id='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						required
					/>
					<br />

					<label htmlFor='password'>Password</label>
					<br />
					<input
						type='text'
						id='username'
						name='password'
						value={password}
						onChange={this.handleChange}
						required
					/>
					<br />
					<label htmlFor='passwordConfirm'>Confirm Your Password</label>
					<br />
					<input
						type='text'
						id='passwordConfirm'
						name='passwordConfirm'
						value={passwordConfirm}
						onChange={this.handleChange}
						required
					/>
					<br />
					<br />
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default Profile;
