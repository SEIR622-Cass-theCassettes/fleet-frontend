// Using react bootstrap: https://git.generalassemb.ly/seir-622/react-bootstrap make a page that shows all of a users trucks. There should also be a button called: "Add truck" that button should open a modal that allows the user to add new trucks. Clicking on a single truck should take you data on a single truck. If no trucks are added tell a user that not a blank page.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import truckimage from './truck.png';
import { Card, Container, Form } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { FleetBackend } from './api/FleetBackend';
import { Button } from 'react-bootstrap';
import { Modal,  } from 'react-bootstrap';

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
			.get('/trucks')
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
				<CardColumns className ='fluid'>
					{this.state.truck.map((truck, id) => {
						return (
							<Card
								key={id}
								className='card border-1 border-warning fluid shadow p-3 mb-5 rounded'>
								<Card.Body>
									<Card.Text className='text-primary text-center text-bold'>
										<h3 className='text-white bg-dark lg'>Truck Name</h3>
										<p className='text-dark text-bold'>{truck.name}</p>
										<h3 className='text-white bg-dark '>Truck make</h3>
										<p className='text-dark text-bold'> {truck.make}</p>
										<h3 className='text-white bg-dark '>Truck modal</h3>
										<p className='text-dark text-bold'> {truck.model}</p>
										<Link
											className='text-white'
											exact
											to={`/SingleTruck/${truck.vin}`}>
											<p className='text-dark bg-warning'>
												CLICK HERE FOR ALL DETAILS
											</p>
											<img src={truckimage} className='img-fluid' alt='truck' />
										</Link>
									</Card.Text>
								</Card.Body>
							</Card>
						);
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
							<Modal.Title className='text-center'>
								Add a new Truck to your Fleet
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form.Group onSubmit={this.handleSubmit}>
								<Form.Control
									size='lg'
									type='text'
									placeholder='New Truck Name'
									id='name'
									name='name'
									value={this.state.newTruck.name}
									onChange={this.handleChange}
								/>

								<br />
								<Form.Control
									size='lg'
									placeholder='Vin'
									type='text'
									id='vin'
									value={this.state.newTruck.vin}
									name='vin'
									onChange={this.handleChange}
								/>
								<br />
								<Form.Control
									size='lg'
									placeholder='Make'
									type='text'
									id='make'
									value={this.state.newTruck.make}
									name='make'
									onChange={this.handleChange}
								/>
								<br />
								<Form.Control
									size='lg'
									placeholder='Model'
									type='text'
									id='model'
									name='model'
									value={this.state.newTruck.model}
									onChange={this.handleChange}
								/>
								<br />
								<Form.Control
									size='lg'
									placeholder='Plate'
									type='text'
									id='plate'
									name='plate'
									value={this.state.newTruck.plate}
									onChange={this.handleChange}
								/>
								<br />

								<Form.Control
									size='lg'
									placeholder='Status'
									type='text'
									id='status'
									name='status'
									value={this.state.newTruck.status}
									onChange={this.handleChange}
								/>
								<br />
								<Form.Text>Date of Last Service</Form.Text>
								<Form.Control
									size='lg'
									placeholder='date '
									type='date'
									id='lastServiced'
									name='lastServiced'
									value={this.state.newTruck.lastServiced}
									onChange={this.handleChange}
								/>
								<br />
								<Form.Text>Service Due on</Form.Text>
								<Form.Control
									size='lg'
									type='date'
									id='serviceDue'
									name='serviceDue'
									value={this.state.newTruck.serviceDue}
									onChange={this.handleChange}
								/>
								<br />
								<Form.Control
									size='lg'
									placeholder='Your Name'
									type='text'
									id='lastUser'
									name='lastUser'
									value={this.state.newTruck.lastUser}
									onChange={this.handleChange}
								/>
								<br />
							</Form.Group>
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
