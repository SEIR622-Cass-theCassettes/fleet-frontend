import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FleetBackend } from './api/FleetBackend';
import  Notes  from './Notes';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Numeral from 'numeral';
import './styles/Containers.css';

class SingleTruck extends Component {
	constructor() {
		super();
		this.state = {
			truck: undefined,
			newTruck: undefined,
			showTruck: false,
			newMileage: undefined,
		};
	}

	componentDidMount() {
		FleetBackend()
			.get(`trucks/${this.props.match.params.vim}`)
			.then((results) => {
				FleetBackend()
					.get(`mileage/${results.data['_id']}/latest`)
					.then((mileage) => {
						let truck = results.data;
						truck.mileage = mileage.data.mileage;
						this.setState({ truck: truck });
					});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	handleTruckChange = (event) => {
		let newTruck = this.state.newTruck;
		newTruck[event.target.name] = event.target.value;
		this.setState({
			newTruck: newTruck,
		});
	};

	handleTruckSubmit = (event) => {
		event.preventDefault();
		FleetBackend()
			.put(`trucks/${this.props.match.params.vim}`, this.state.newTruck)
			.then((results) => {
				this.handleTruckEditHide();
				this.setState({ truck: results.data });
				FleetBackend()
					.get(`mileage/${results.data['_id']}/latest`)
					.then((mileage) => {
						let truck = results.data;
						truck.mileage = mileage.data.mileage;
						this.setState({ truck: truck });
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleMileageChange = (event) => {
		this.setState({
			newMileage: event.target.value,
		});
	};

	handleTruckEditHide = () => this.setState({ showTruck: false });

	handleTruckEditShow = () => {
		if (this.state.newTruck === undefined) {
			let newTruck = {};
			Object.keys(this.state.truck).map((key) => {
				newTruck[key] = this.state.truck[key];
			});
			this.setState({ newTruck: newTruck });
		}
		this.setState({ showTruck: true });
	};

	handleMileageSubmit = (event) => {
		event.preventDefault();
		FleetBackend()
			.get(`users/${this.props.userEmail}`)
			.then((user) => {
				FleetBackend()
					.post(`mileage`, {
						truck: this.state.truck['_id'],
						mileage: this.state.newMileage,
						user: user['_id'],
					})
					.then((results) => {
						this.handleMileageEditHide();
						let truck = this.state.truck;
						truck.mileage = this.state.newMileage;
						this.setState({truck : truck});
					})
					.catch((error) => {
						console.log(error);
					});
			});
	};

	handleMileageEditHide = () => this.setState({ showMileage: false });

	handleMileageEditShow = () => {
		if (this.state.newMileage === undefined) {
			this.setState({ newMileage: parseInt(this.state.truck.mileage) });
		}
		this.setState({ showMileage: true });
	};

	render() {
		return (
			<Container className='info mainContainer'>
				{this.state.truck !== undefined && (
					<Container>
						<Container>
							<Row>
								<Col>
									<h2>Truck Name: {this.state.truck.name}</h2>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Vin: {this.state.truck.vin}</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Make: {this.state.truck.make}</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Model: {this.state.truck.model}</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Plate: {this.state.truck.plate}</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Status: {this.state.truck.status}</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>
										Current Mileage:{' '}
										{Numeral(this.state.truck.mileage).format('0,0')}
									</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Last Serviced: {this.state.truck.lastServiced}</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Service Due: {this.state.truck.serviceDue}</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>Last Users: {this.state.truck.lastUsers}</p>
								</Col>
							</Row>
              <Notes notes={this.props.notes} newNotes={this.props.newNotes}/>
							<Row>
								<Col>
									<Button onClick={this.handleTruckEditShow}>Edit Truck</Button>
								</Col>
								<Col>
									<Button
										variant='secondary'
										onClick={this.handleMileageEditShow}>
										Update Mileage
									</Button>
								</Col>
							</Row>
						</Container>
						{this.state.newTruck !== undefined && (
							<Container>
								<Modal
									show={this.state.showTruck}
									onHide={this.handleTruckEditHide}>
									<Modal.Header closeButton>
										<Modal.Title>Edit Vehicle</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form onSubmit={this.handleTruckSubmit}>
											<Form.Row>
												<Form.Group>
													<Form.Label>Name</Form.Label>
													<Form.Control
														type='text'
														placeholder='Truck Name'
														required
														value={this.state.newTruck.name}
														name='name'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Vin</Form.Label>
													<Form.Control
														type='text'
														placeholder='Vin'
														required
														value={this.state.newTruck.vin}
														name='vin'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Make</Form.Label>
													<Form.Control
														type='text'
														placeholder='Make'
														value={this.state.newTruck.make}
														name='make'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Model</Form.Label>
													<Form.Control
														type='text'
														placeholder='Model'
														value={this.state.newTruck.model}
														name='model'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Plate</Form.Label>
													<Form.Control
														type='text'
														placeholder='Plate'
														value={this.state.newTruck.plate}
														name='plate'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Status</Form.Label>
													<Form.Control
														as='select'
														value={this.state.newTruck.status}
														onChange={this.handleTruckChange}
														name='status'
														placeholder='Status'>
														<option>Ready</option>
														<option>Out</option>
														<option>Waiting Repairs</option>
														<option>Being Repaired</option>
														<option>Inoperable</option>
													</Form.Control>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Last Service</Form.Label>
													<Form.Control
														type='date'
														placeholder='Last Serviced'
														value={this.state.newTruck.lastServiced}
														name='lastServiced'
														id='lastServiced'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Service Due</Form.Label>
													<Form.Control
														type='date'
														placeholder='Service Due'
														value={this.state.newTruck.serviceDue}
														name='serviceDue'
														id='serviceDue'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group>
													<Form.Label>Last User</Form.Label>
													<Form.Control
														type='text'
														placeholder='Last User'
														value={this.state.newTruck.lastUser}
														name='lastUser'
														id='lastUser'
														onChange={this.handleTruckChange}
													/>
												</Form.Group>
											</Form.Row>
										</Form>
									</Modal.Body>
									<Modal.Footer>
										<Button type='submit' onClick={this.handleTruckSubmit}>
											Submit
										</Button>
										<Button
											variant='secondary'
											onClick={this.handleTruckEditHide}>
											Close
										</Button>
									</Modal.Footer>
								</Modal>
							</Container>
						)}

						{
							//Millage modal
							this.state.truck !== undefined && (
								<Container>
									<Modal
										show={this.state.showMileage}
										onHide={this.handleMileageEditHide}>
										<Modal.Header closeButton>
											<Modal.Title>Update Milage</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Form onSubmit={this.handleMileageSubmit}>
												<Form.Row>
													<Form.Group>
														<Form.Label>Name</Form.Label>
														<Form.Control
															type='number'
															placeholder='Milage'
															required
															value={this.state.newMileage}
															name='newMilage'
															onChange={this.handleMileageChange}
														/>
													</Form.Group>
												</Form.Row>
											</Form>
										</Modal.Body>
										<Modal.Footer>
											<Button type='submit' onClick={this.handleMileageSubmit}>
												Submit
											</Button>
											<Button
												variant='secondary'
												onClick={this.handleMileageEditHide}>
												Close
											</Button>
										</Modal.Footer>
									</Modal>
								</Container>
							)
						}
					</Container>
				)}
			</Container>
		);
	}
}

export default SingleTruck;
