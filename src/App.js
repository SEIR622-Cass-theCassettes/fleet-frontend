import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Home from './Home'
import { Container, Row, Col } from 'react-bootstrap';
class App extends Component {
	render() {
		return (
			<Container className='app'>
				<Navigation />
				<Container>
					<h1>testity test test test</h1>
				</Container>
				<Container>
					<Route exact path='/home' render={() => <Home />} />
				</Container>
			</Container>
		);
	}
}

export default App;
