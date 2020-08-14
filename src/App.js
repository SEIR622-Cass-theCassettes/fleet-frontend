import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
class App extends Component {
	render() {
		return (
			<Container className='App' style={{ maxWidth: '100%' }}>
				<Row>
					<Col>
						<Navigation />
					</Col>
				</Row>
				<h1>testity test test test</h1>
			</Container>
		);
	}
}

export default App;
