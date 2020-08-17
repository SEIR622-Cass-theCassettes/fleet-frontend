// Using react bootstrap: https://git.generalassemb.ly/seir-622/react-bootstrap create a single truck display. Using the truck id found in the url show the trucks information. It's image, status, make, model. At the bottom of the page there should be a button labeled: "Edit truck" clicking on it should open a modal prepopulated with the trucks current data. The model should have the same fields as the create truck modal (reuse maybe?) including an "X" button in the corner that will close the modal without saving any data.

import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class SingleTruck extends Component {
	constructor() {
		super();
		this.state = {
			truck: null,
			show: false,
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
        const handleChange = ((event) => {
            	this.setState({
								[event.target.name]: event.target.value,
							});
        });

	const handleSubmit = (event) => {
        event.preventDefault()
		console.log('Submitting');
		console.log(this.state);
	};
		const handleClose = () => this.setState({ show: false });
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
							<Modal.Title>Edit Vehicle</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<form onSubmit={handleSubmit}>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									id='name'
									name='name'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='vin'>Vin</label>
								<input
									type='text'
									id='vin'
									name='vin'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='make'>Make</label>
								<input
									type='text'
									id='make'
									name='make'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='model'>Model</label>
								<input
									type='text'
									id='model'
									name='model'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='plate'>Plate</label>
								<input
									type='text'
									id='plate'
									name='plate'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='status'>Status</label>
								<input
									type='text'
									id='status'
									name='status'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='lastServiced'>Last Service</label>
								<input
									type='text'
									id='lastServiced'
									name='lastServiced'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='serviceDue'>Service Due</label>
								<input
									type='text'
									id='serviceDue'
									name='serviceDue'
									onChange={handleChange}></input>
								<br />
								<label htmlFor='lastUser'>Last User</label>
								<input
									type='text'
									id='lastUser'
									name='lastUser'
									onChange={handleChange}></input>
								<br />
								<input type='submit' />
							</form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}/>
								Close Without saving
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		);
	}
}

export default SingleTruck;
