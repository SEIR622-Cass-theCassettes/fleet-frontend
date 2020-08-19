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

	handleModal() {
		this.setState({ show: !this.state.show });
	}
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
										<Link
											className='text-white'
											exact
											to={`/trucks/SingleTruck${truck.vin}`}>
											<p>see more on details on this truck</p>
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
						onClick={() => {
							this.handleModal();
						}}>
						add a new truck to the list yo
					</Button>
				</Container>
				<Modal show={this.state.show} onHide={() => this.handleModal()}>
					<Modal.Header closeButton>
						<Modal.Title>Add a new Truck to your Fleet</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Truck Name</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Truck Name'
								aria-label='Truck Name'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Truck Vin</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Truck Vin'
								aria-label='Truck Vin'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Truck Make</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Truck Make'
								aria-label='Truck Make'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Truck Model</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Truck Model'
								aria-label='Truck Model'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Plate</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Plate'
								aria-label='Plate'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Status</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Status'
								aria-label='Status'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>
									Last Service
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Date OfLast Service'
								aria-label='Last Service'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Service Due</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='service due on'
								aria-label='Service Due'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
						<InputGroup className='mb-3'>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>Last Driver</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Name of Last Driver'
								aria-label='Last Driver'
								aria-describedby='basic-addon1'
							/>
						</InputGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button
							onClick={() => {
								this.handleModal();
							}}>
							Close
						</Button>
						<Button>Save Changes</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default TruckList;
