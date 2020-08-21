import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Container} from 'react-bootstrap';
import trucks from './trucks.jpg';
import trucker1 from './trucker1.jpg';
import trucker2 from './trucker2.jpg';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<>
				<Carousel>
					<Carousel.Item>
						<img
							style={{
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={trucks}
							alt='First slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={{
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={trucker1}
							alt='Second slide'
						/>

						<Carousel.Caption>
							<h5 className=' text-dark display-9 font-weight-bold text-shadow'>
								Happy Fleet user Bob!
							</h5>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							style={{
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={trucker2}
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h5 className=' text-white display-9 font-weight-bold text-shadow'>
								Bob loves to use Fleet while he is on the road!
							</h5>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<Card className='card-deck border-0'>
					<Card.Body className='bg-warning border: none'>
						<Card.Title className='text-center'>
							<h1>Who is Fleet?</h1>
						</Card.Title>
						<Card.Text className='list-group list-group-flush bg-warning text-center border-none'>
							Fleet is a modern method for businesses to manage their vehicles.
							Using our software allows customers to keep track of important
							information on their fleet vehicles. This includes when services
							are due. Users can also add notes in order for employees to report
							any issues on said vehicles or to keep track of required repairs.
						</Card.Text>
					</Card.Body>
					<Card.Body className='bg-dark'>
						<Card.Title className='text-center text-light'>
							<h1>What is Fleet?</h1>
						</Card.Title>
						<Card.Text className='list-group list-group-flush text-center text-light'>
							Have any of your company's trucks ever gone past their service
							date? This can cause expensive repairs to be required. With Fleet
							your vehicles can be managed much easier and you no longer have to
							worry about Bob losing the sticky note that had the mileage of the
							last oil change scribbled on it. It's okay Bob, we forgive you
							this time. Our note taking capabilities allow all of the important
							information about your vehicles to be kept in one place. If your
							services are conducted in house simply add a note with the oil
							filters part number and the oil weight so its always on hand.
						</Card.Text>
					</Card.Body>
					<Card.Body className='bg-warning'>
						<Card.Title className='text-center'>
							<h1>Why Choose Fleet?</h1>
						</Card.Title>
						<Card.Text className='list-group list-group-flush bg-warning text-center'>
							Here at Fleet we are dedicated to making your life just a little
							bit easier. You already have enough on your plate running a
							business. Our goal is to make sure your vehicles operate as
							smoothly as possible.
						</Card.Text>
					</Card.Body>
				</Card>
				<Container className='bg-dark list-group-flush'>
					<div className='bg-dark'>
						<div className='footerContainer text-center'>
							<div className='rows'>
								<div className='col-m-4 py-4'>
									<h4 className='text-light'>A note from the people behind fleet</h4>
									<p class='text-muted'>
										Thanks for taking the time to have a look around fleet and
										its content. There will be more soon!
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</>
		);

	}
}

export default Home;
