import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FleetBackend } from './api/FleetBackend';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Numeral from 'numeral';
import './styles/Containers.css';

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
				FleetBackend()
					.get(`mileage/${results.data['_id']}/latest`)
					.then((mileage) => {
						let truck = results.data;
						truck.mileage = Numeral(mileage.data.mileage).format('0,0');
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
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleTruckEditHide = () => this.setState({ show: false });

	handleTruckEditShow = () => {
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
									<p>Current Mileage: {this.state.truck.mileage}</p>
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
							<Row>
								<Col>
									<Button onClick={this.handleTruckEditShow}>Edit Truck</Button>
								</Col>
							</Row>
						</Container>
						{this.state.newTruck !== undefined && (
							<Container>
								<Modal show={this.state.show} onHide={this.handleTruckEditHide}>
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
														type='text'
														placeholder='Status'
														value={this.state.newTruck.status}
														name='status'
														onChange={this.handleTruckChange}
													/>
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
										<Button variant='secondary' onClick={this.handleTruckEditHide}>
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
