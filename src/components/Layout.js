import React from 'react';
import { Container } from 'react-bootstrap';

import NavBar from './NavBar';

export default function Layout({ children }) {
	return (
		<Container fluid>
			<NavBar />
			{children}
		</Container>
	);
}
