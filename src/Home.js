import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import trucks from './trucks.jpg';
import trucker1 from './trucker1.jpg';
import trucker2 from './trucker2.jpg';

class Home extends Component {
	render() {
		return (
			<>
				<Carousel>
					<Carousel.Item>
						<img className='d-block w-100' src={trucks} alt='First slide' />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={trucker1} alt='Second slide' />

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>somebody is happy with himself!</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className='d-block w-100' src={trucker2} alt='Third slide' />

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>still happy!</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<Card className='card-deck'>
					<Card.Body className='bg-warning'>
						<Card.Title className='text-center'>
							<h1>Who is Fleet?</h1>
						</Card.Title>
						<Card.Text className='list-group list-group-flush bg-warning'>
							<p className='list-group-item text-center border-0 bg-warning'>
								Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
								elit, <br></br>sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>
						</Card.Text>
					</Card.Body>
					<Card.Body className='bg-dark'>
						<Card.Title className='text-center text-light'>
							<h1>What is Fleet?</h1>
						</Card.Title>
						<Card.Text className='list-group list-group-flush '>
							<p className='list-group-item text-center border-0 bg-dark text-light'>
								Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
								elit, <br></br>sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>
						</Card.Text>
					</Card.Body>
					<Card.Body className='bg-warning'>
						<Card.Title className='text-center'>
							<h1>Why Choose Fleet?</h1>
						</Card.Title>
						<Card.Text className='list-group list-group-flush bg-warning'>
							<p className='list-group-item text-center border-0 bg-warning'>
								Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
								elit, <br></br>sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</>
		);

	}
}

export default Home;
