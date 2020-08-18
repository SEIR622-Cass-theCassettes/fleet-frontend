// Using react bootstrap: https://git.generalassemb.ly/seir-622/react-bootstrap make a page that shows all of a users trucks. There should also be a button called: "Add truck" that button should open a modal that allows the user to add new trucks. Clicking on a single truck should take you data on a single truck. If no trucks are added tell a user that not a blank page.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import truck from './truck.png';
import { Card } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';

class TruckList extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<CardColumns>
				<Card key=''>
					<Card.Body className='p-6 mb-6 bg-warning text-white text-xl-center'>
						<Card.Text className='text-white'>
							<h1>Truck Name</h1>
							<Link className='text-white' exact to={`/trucks/SingleTruck`}>
								{' '}
								{/* {`/trucks/${data.vin}`}*/}
								<p>see more on details on this truck</p>
								{/* {data.vin}{' '} */}
								<img src={truck} alt='truck' height={90} width={90} />
							</Link>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardColumns>
		);
	}
}

export default TruckList;
