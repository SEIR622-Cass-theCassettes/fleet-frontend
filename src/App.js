import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SignIn from './SignIn';
import Profile from './Profile';
import SingleTruck from './SingleTruck'
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap';
import logo from './fleetlogos.png';
class App extends Component {
	render() {
		return (
			<Container className='app'>
				<Container className='header'>
					<Row>
						<Col>
							<h1>Fleet</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<Navbar className='links'>
								<Nav>
									<Link to='/'>
										<img src={logo} alt='fleet logo'></img>
									</Link>
									<Link to='/signIn'>
										<p>Sign in</p>
									</Link>
									<p>My Trucks</p>
									<Link to='/myProfile'>
										<p>My Profile</p>
									</Link>
									<p>Log Off</p>
									<p>About Us</p>
								</Nav>
							</Navbar>
						</Col>
					</Row>
				</Container>
				<Container>
					<h1>Welcome To The Fleet!</h1>
				</Container>
				<Container>
					<Route
						exact
						path='/'
						render={() => {
							return <Home return />;
						}}
					/>
					<Route
						path='/signIn'
						render={() => {
							return <SignIn return />;
						}}
					/>

					<Route
						path='/myProfile'
						render={() => {
							return <Profile return />;
						}}
						/>
					<Route
						path='/SingleTruck'
						render={() => {
							return <SingleTruck return />;
						}}
					/>
				</Container>
			</Container>
		);
	}
}

export default App;
