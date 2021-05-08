import React, { useContext } from 'react';
import { Row, Form, FormControl, Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
	const { setCurrentUser } = useContext(AuthContext);
	const history = useHistory();

	const handleLogin = (e) => {
		e.preventDefault();
		setCurrentUser({
			userName: 'admin',
			email: 'admin@example.com',
		});
		localStorage.setItem('userName', 'admin');
		localStorage.setItem('email', 'admin@example.com');
		history.push('/');
	};

	return (
		<Row>
			<Col md={{ span: 6, offset: 3 }}>
				<div className="loginForm">
					<Card>
						<Card.Header>
							<h3>Login</h3>
						</Card.Header>
						<Card.Body>
							<Form onSubmit={handleLogin} inline>
								<FormControl
									type="text"
									placeholder="Username"
									className="mr-sm-2"
									required
								/>
								<FormControl
									type="password"
									placeholder="Password"
									className="mr-sm-2"
									required
								/>
								<Button variant="primary" type="submit">
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</div>
			</Col>
		</Row>
	);
}
