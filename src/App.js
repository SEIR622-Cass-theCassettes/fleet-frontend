import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import About from './About';
import SingleTruck from './SingleTruck';
import TruckList from './TruckList';
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap';
import logo from './fleetlogos.png';

class App extends Component {
	constructor() {
		super();
		this.state = {
			token: sessionStorage.getItem('token'),
			userEmail: sessionStorage.getItem('userEmail'),
		};
	}

	logOff = () => {
		sessionStorage.removeItem('userInfo');
		sessionStorage.removeItem('userEmail');
		this.setState({ userInfo: undefined, userEmail: undefined });
	};

	render() {
		const navBar = () => {
			if (this.state.userEmail === undefined || this.state.userEmail === null) {
				return (
					<Container>
						<Link to='/about-us'>
							<p>About Us</p>
						</Link>
						<Link to='/users/signIn'>
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
						<Link to='/'>
							<p onClick={this.logOff}>Log Off</p>
						</Link>
					</Container>
				);
			}
		};
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
							return (
								<SignIn setToken={this.setToken} history={this.state.history} />
							);
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
				<Route exact path='/users/signup' render={() => <SignUp />} />
				<Route exact path='/users/signin' render={() => <SignIn />} />
			</Container>
		);
	}
}

export default App;
