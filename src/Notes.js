import React, { Component } from 'react';
import { FleetBackend } from './api/FleetBackend';

class Notes extends Component {
	constructor() {
		super();
		this.state = {
			notes: '',
			newNotes: '',
		};
	}

	componentDidMount() {
		FleetBackend()
			.get(`truck/${this.props.match.params.id}`)
			.then((results) => {
				this.setState({ notes: results.data });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	handleChange = (event) => {
		let newNote = this.state.newNote;
		newNote[event.target.name] = event.target.value;
		this.setState({
			newNotes: newNotes,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		FleetBackend()
			.post(this.state.newNotes)
			.then((results) => {
				this.handleClose();
				this.setState({ newNotes: results.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return <div></div>;
	}
}

export default Notes;