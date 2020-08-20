import React, { Component } from 'react';
import { FleetBackend } from './api/FleetBackend';

class Notes extends Component {
	constructor() {
		super();
		this.state = {
			notes: [],
			newNotes: '',
		};
	}

	componentDidMount() {
		FleetBackend()
			.get(`/notes/truck/${this.props.truck}`)
			.then((notes) => {
				console.log(notes);
				let newNotes = notes.data.map((note) => {
					return note.message;
				});
				this.setState({ notes: newNotes });
			});
	}

	handleChange = (event) => {
		let newMessage = event.target.value;
		this.setState({
			newMessage: newMessage,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(event)
		FleetBackend()
			.get(`/users/${sessionStorage.getItem('userEmail')}`)
			.then((user) => {
				FleetBackend()
					.post('/notes', {
						user: user['_id'],
						message: this.state.newMessage,
						truck: this.props.truck,
					})
					.then((results) => {
						FleetBackend()
							.get(`/notes/truck/${this.props.truck}`)
							.then((notes) => {
								console.log(notes);
								let newNotes = notes.data.map((note) => {
									return note.message;
								});
								this.setState({ notes: newNotes, newMessage: '' });
							});
					})
					.catch((error) => {
						console.log(error);
					});
			});
	};

	render() {
		return (
			<div>
				<form>
					<label htmlFor='notes'>Add Notes:</label>
					<input
						type='text'
						id='newNotes'
						name='newNotes'
						value={this.state.newMessage}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleSubmit}>Submit Notes</button>
				</form>
				<span>
					Notes:{' '}
					{this.state.notes.map((note) => {
						return <p>{note}</p>;
					})}
				</span>
			</div>
		);
	}
}
export default Notes;
