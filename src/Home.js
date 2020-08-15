import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import trucks from './trucks.jpg';
import trucker1 from './trucker1.jpg';
import trucker2 from './trucker2.jpg';

class Home extends Component {
	render() {
		return (
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
		);
	}
}

export default Home;
