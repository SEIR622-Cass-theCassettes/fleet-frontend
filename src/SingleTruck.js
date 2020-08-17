// Using react bootstrap: https://git.generalassemb.ly/seir-622/react-bootstrap create a single truck display. Using the truck id found in the url show the trucks information. It's image, status, make, model. At the bottom of the page there should be a button labeled: "Edit truck" clicking on it should open a modal prepopulated with the trucks current data. The model should have the same fields as the create truck modal (reuse maybe?) including an "X" button in the corner that will close the modal without saving any data.

import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class SingleTruck extends Component {
	constructor() {
		super();
		this.state = {
            truck: null,
            show: false
		};
	}

	// componentDidMount() {
	// 	fetch(`where ever the hell the trucks are`)
	// 		.then((results) => results.json())
	// 		.then((results) => {
	// 			this.setState({ truck: results });
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }
	render() {
		const handleClose = () => this.setState({show: false})
		const handleShow = () => this.setState({ show: true });
		return (
			<div className='info'>

                {/* this is what will end up being used once everything is set up */}
				{/* <h2>Truck Name: {this.state.truck.name}</h2> */}
				{/* <p>Vin: {this.state.truck.vin}</p> */}
				{/* <p>Make: {this.state.truck.make}</p> */}
				{/* <p>Model: {this.state.truck.model}</p> */}
				{/* <p>Plate: {this.state.truck.plate}</p> */}
				{/* <p>Status: {this.state.truck.status}</p> */}
				{/* <p>Last Serviced: {this.state.truck.lastServiced}</p> */}
				{/* <p>Service Due: {this.state.truck.serviceDue}</p> */}
				{/* <p>Last Users: {this.state.truck.lastUsers}</p> */}

                {/* just for testing purposes */}
				<h2>Truck Name: test</h2>
				<p>Vin: test</p>
				<p>Make: test</p>
				<p>Model: test</p>
				<p>Plate: test</p>
				<p>Status: test</p>
				<p>Last Serviced: test</p>
				<p>Service Due: test</p>
				<p>Last Users: test</p>
				<button onClick={handleShow}>edit truck</button>

				<div>
					<Modal show={this.state.show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Woohoo, you're reading this text in a modal!
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
							<Button variant='primary' onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		);
	}
}

export default SingleTruck;
