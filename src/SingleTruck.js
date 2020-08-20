
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FleetBackend } from './api/FleetBackend';
import { Container} from 'react-bootstrap';
import  Notes  from './Notes';
class SingleTruck extends Component {
	constructor() {
		super();
		this.state = {
			truck: undefined,
			newTruck: undefined,
			show: false,
		};
	}

	componentDidMount() {
		FleetBackend()
			.get(`trucks/${this.props.match.params.vim}`)
			.then((results) => {
				this.setState({ truck: results.data });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	handleChange = (event) => {
		let newTruck = this.state.newTruck;
		newTruck[event.target.name] = event.target.value;
		this.setState({
			newTruck: newTruck,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		FleetBackend()
			.put(`trucks/${this.props.match.params.vim}`, this.state.newTruck)
			.then((results) => {
				this.handleClose();
				this.setState({ truck: results.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleClose = () => this.setState({ show: false });
	handleShow = () => {
		if (this.state.newTruck === undefined) {
			let newTruck = {};
			Object.keys(this.state.truck).map((key) => {
				newTruck[key] = this.state.truck[key];
			});
			this.setState({ newTruck: newTruck });
		}
		this.setState({ show: true });
	};

	render() {
		return (
			<Container className='info'>
				{this.state.truck !== undefined && (
					<Container>
						<Container>
							<h2>Truck Name: {this.state.truck.name}</h2>
							<p>Vin: {this.state.truck.vin}</p>
							<p>Make: {this.state.truck.make}</p>
							<p>Model: {this.state.truck.model}</p>
							<p>Plate: {this.state.truck.plate}</p>
							<p>Status: {this.state.truck.status}</p>
							<p>Last Serviced: {this.state.truck.lastServiced}</p>
							<p>Service Due: {this.state.truck.serviceDue}</p>
							<p>Last Users: {this.state.truck.lastUsers}</p>
							<button onClick={this.handleShow}>edit truck</button>
							<Notes notes={this.props.notes} newNotes={this.props.newNotes}/>
						</Container>
						{this.state.newTruck !== undefined && (
							<Container>
								<Modal show={this.state.show} onHide={this.handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Edit Vehicle</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<form onSubmit={this.handleSubmit}>
											<label htmlFor='name'>Name</label>
											<input
												type='text'
												id='name'
												name='name'
												value={this.state.newTruck.name}
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='vin'>Vin</label>
											<input
												type='text'
												id='vin'
												value={this.state.newTruck.vin}
												name='vin'
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='make'>Make</label>
											<input
												type='text'
												id='make'
												value={this.state.newTruck.make}
												name='make'
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='model'>Model</label>
											<input
												type='text'
												id='model'
												name='model'
												value={this.state.newTruck.model}
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='plate'>Plate</label>
											<input
												type='text'
												id='plate'
												name='plate'
												value={this.state.newTruck.plate}
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='status'>Status</label>
											<input
												type='text'
												id='status'
												name='status'
												value={this.state.newTruck.status}
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='lastServiced'>Last Service</label>
											<input
												type='date'
												id='lastServiced'
												name='lastServiced'
												value={this.state.newTruck.lastServiced}
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='serviceDue'>Service Due</label>
											<input
												type='date'
												id='serviceDue'
												name='serviceDue'
												value={this.state.newTruck.serviceDue}
												onChange={this.handleChange}></input>
											<br />
											<label htmlFor='lastUser'>Last User</label>
											<input
												type='text'
												id='lastUser'
												name='lastUser'
												value={this.state.newTruck.lastUser}
												onChange={this.handleChange}></input>
											<br />
										</form>
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
						)}
					</Container>
				)}
			</Container>
		);
	}
}

export default SingleTruck;
