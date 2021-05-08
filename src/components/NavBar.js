import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

export default function NavBar() {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const history = useHistory();
	const user = localStorage.getItem('userName');

	const handleLogout = (e) => {
		setCurrentUser(null);
		localStorage.removeItem('userName');
		localStorage.removeItem('email');
		history.push('/');
	};

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">MEETUP PORTAL</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/admin">Admin</Nav.Link>
						<Nav.Link href="/report">Report</Nav.Link>
						{(currentUser || user) && (
							<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
