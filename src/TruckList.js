// Using react bootstrap: https://git.generalassemb.ly/seir-622/react-bootstrap make a page that shows all of a users trucks. There should also be a button called: "Add truck" that button should open a modal that allows the user to add new trucks. Clicking on a single truck should take you data on a single truck. If no trucks are added tell a user that not a blank page.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import truckimage from './truck.png';
import { Card } from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { FleetBackend } from './api/FleetBackend';

class TruckList extends Component {
	constructor() {
		super();
		this.state = {
            truck: []
        };
	}
	componentDidMount() {
        FleetBackend()
        .get('trucks/',{
            name: this.state.name,
            vin: this.state.vin,
        })
        .then((results) => {
            this.setState({ truck: results.data })
        })
        .catch((err) => {
            console.error(err);
        });
    }
    render() {
		return (
			<CardColumns>
				<Card key=''>
					<Card.Body className='p-6 mb-6 bg-warning text-white text-xl-center'>
						<Card.Text className='text-white'>
							<Link className='text-white' exact to={`/trucks/SingleTruck`}>
								{' '}
								{/* {`/trucks/${data.vin}`}*/}
								<p>see more on details on this truck</p>
								{/* {data.vin}{' '} */}
								<img src={truckimage} className='img-fluid' alt='truck' />
							</Link>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardColumns>
		);
	}
}

export default TruckList;
