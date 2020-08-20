import React, { Component } from 'react';
import './About.css';
import SemiTruck from './semi-drive.jpg';
import BabyTruck from './baby-truck.jpg';
class About extends Component {
	render() {
		return (
			<div className='about-us'>
				<div className='image'>
					<img src={SemiTruck} alt='semi-truck' />
					<img src={BabyTruck} alt='toy-truck' />
				</div>
				<h2>
					No matter the size of your company or job Fleet has you covered.
				</h2>
				<h3>What is Fleet?</h3>
				<p>
					Fleet is a modern method for businesses to manage their vehicles.
					Using our software allows customers to keep track of important
					information on their fleet vehicles. This includes when services are
					due. Users can also add notes in order for employees to report any
					issues on said vehicles or to keep track of required repairs.
				</p>
				<h3>Why Is Fleet Right For Me?</h3>
				<p>
					Have any of your company's trucks ever gone past their service date?
					This can cause expensive repairs to be required. With Fleet your
					vehicles can be managed much easier and you no longer have to worry
					about Bob losing the sticky note that had the mileage of the last oil
					change scribbled on it. It's okay Bob, we forgive you this time. Our
					note taking capabilities allow all of the important information about
					your vehicles to be kept in one place. If your services are conducted
					in house simply add a note with the oil filters part number and the
					oil weight so its always on hand.
				</p>
				<h3>Our Values</h3>
				<p>
					Here at Fleet we are dedicated to making your life just a little bit
					easier. You already have enough on your plate running a business. Our
					goal is to make sure your vehicles operate as smoothly as possible.
				</p>
				<h3>How Much Is Fleet?</h3>
				<p>As much as you're willing to pay me.</p>
				<h3>How Can I Contact Fleet For Issues or Suggestions?</h3>
				<p>Email: fleet@fleet.fleet</p>
				<p>Phone: 1-800-fleet</p>
			</div>
		);
	}
}

export default About;
