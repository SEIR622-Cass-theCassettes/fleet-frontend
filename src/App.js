import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import About from './About'
import SingleTruck from './SingleTruck'
import TruckList from './TruckList'
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap';
import logo from './fleetlogos.png';
class App extends Component {
	constructor() {
		super();
		this.state = {
			token: undefined,
		};
	}

	setToken(token) {
		this.setState({ token: token });
	}

	render() {
		let token = this.state.token
		const navBar = ()=> {
			if (token === undefined) {
				return (
					<Container>
						<Link to='/about-us'>
							<p>About Us</p>
						</Link>
						<Link to='/signIn'>
							<p>Sign in</p>
						</Link>
						<Link to='/users/signup'>
							<p>Sign Up</p>
						</Link>
					</Container>
				);
			} else {
				return (
					<Container>
						<Link to='/about-us'>
							<p>About Us</p>
						</Link>
						<Link to='/trucks'>
							<p>My Trucks</p>
						</Link>
						<Link to='/myProfile'>
							<p>My Profile</p>
						</Link>
						<p>Log Off</p>
					</Container>
				);
			}
		}
		return (
			<Container className='app'>
				<Container className='header'>
					<Row>
						<Col>
							<Navbar className='links'>
								<Nav>
									<Link to='/'>
										<img src={logo} alt='fleet logo'></img>
									</Link>
									{navBar()}
								</Nav>
							</Navbar>
						</Col>
					</Row>
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
							return <SignIn setToken={this.setToken} />;
						}}
					/>

					<Route
						path='/myProfile'
						render={() => {
							return <Profile return />;
						}}
					/>
					<Route
						path='/trucks'
						render={() => {
							return <TruckList return />;
						}}
					/>
					<Route
						path='/SingleTruck/:vim'
						render={(routerProps) => {
							return <SingleTruck match={routerProps.match} />;
						}}
					/>
					<Route
						path='/about-us'
						render={() => {
							return <About return />;
						}}
					/>
					<Route path='/signUp' render={() => <SignUp />} />
				</Container>
			</Container>
		);
	}
}

export default App;
