// Using react bootstrap: https://git.generalassemb.ly/seir-622/react-bootstrap make a page that shows all of a users trucks. There should also be a button called: "Add truck" that button should open a modal that allows the user to add new trucks. Clicking on a single truck should take you data on a single truck. If no trucks are added tell a user that not a blank page.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import truckimage from './truck.png';
import { Card, Container } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { FleetBackend } from './api/FleetBackend';
import { Button } from 'react-bootstrap';
import { Modal, InputGroup, FormControl } from 'react-bootstrap';

class TruckList extends Component {
	constructor() {
		super();
		this.state = {
			truck: [],
			show: false,
			newTruck: undefined,
		};
	}
	componentDidMount() {
		FleetBackend()
			.get(`/trucks/user/${sessionStorage.getItem('userEmail')}`)
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
			.post('/trucks', this.state.newTruck)
			.then((results) => {
				this.handleClose();
				let trucks = this.state.truck;
				trucks.push(results.data);
				this.setState({ truck: trucks });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleClose = () => this.setState({ show: false });
	handleShow = () => {
		if (this.state.newTruck === undefined) {
			let newTruck = {};
			this.setState({ newTruck: newTruck });
		}
		this.setState({ show: true });
	};
	render() {
		return (
			<>
				<CardColumns>
					{this.state.truck.map((truck, id) => {
						///maping through data to display information
						return (
							<Card key={id}>
								<Card.Body className='p-6 mb-6 bg-warning text-white text-xl-center'>
									<Card.Text className='text-white'>
										<p>Truck Name {truck.name}</p>
										<p>Truck make {truck.make}</p>
										<p>Truck modal {truck.model}</p>
										<Link
											className='text-white'
											exact
											to={`/SingleTruck/${truck.vin}`}>
											<p className='text-warning'>
												see more on details on this truck
											</p>
											<img src={truckimage} className='img-fluid' alt='truck' />
										</Link>
									</Card.Text>
								</Card.Body>
							</Card>
						); // list of chosen datasets plus link to take user to page
					})}
				</CardColumns>
				<Container>
					<Button
						className='shadow p-3 mb-5 rounded'
						onClick={() => {
							this.handleShow();
						}}>
						add a new truck to the list yo
					</Button>
				</Container>
				{this.state.newTruck !== undefined && (
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Add a new Truck to your Fleet</Modal.Title>
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
							<Button
								onClick={() => {
									this.handleClose();
								}}>
								Close
							</Button>
							<Button type='submit' onClick={this.handleSubmit}>
								Submit
							</Button>
						</Modal.Footer>
					</Modal>
				)}
			</>
		);
	}
}

export default TruckList;
