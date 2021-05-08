import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

import Notification from '../components/Notification';

import { API_URL } from '../configs/config';

export default function Home() {
	const [user, setUser] = useState({ professoin: 'Employed', guest: 0 });
	const [status, setStatus] = useState(null);
	const [message, setMessage] = useState(null);

	const formRef = useRef();

	const handleChange = (e) => {
		const { id, value } = e.target;
		setUser({ ...user, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${API_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((result) => {
				const { status, message } = result.data;
				if (status === '200') {
					setStatus('success');
					setMessage(message);
					formRef.current.reset();
				}
			})
			.catch((error) => {
				setStatus('danger');
				setMessage(error);
			});
	};

	return (
		<>
			{status !== null && <Notification variant={status} message={message} />}
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<div className="resgisterForm">
						<Card>
							<Card.Header>
								<h3>Register yourslef for the upcoming Meetup!</h3>
							</Card.Header>
							<Card.Body>
								<Form id="registerForm" ref={formRef} onSubmit={handleSubmit}>
									<Form.Group controlId="name">
										<Form.Label>Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Name"
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group controlId="age">
										<Form.Label>Age</Form.Label>
										<Form.Control
											type="number"
											placeholder="Age"
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group controlId="dob">
										<Form.Label>D.O.B</Form.Label>
										<Form.Control
											type="date"
											placeholder="Date of Birth"
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group controlId="profession">
										<Form.Label>Profession</Form.Label>
										<Form.Control as="select" onChange={handleChange}>
											<option>Employed</option>
											<option>Student</option>
										</Form.Control>
									</Form.Group>
									<Form.Group controlId="locality">
										<Form.Label>Locality</Form.Label>
										<Form.Control
											type="text"
											placeholder="Locality"
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<Form.Group controlId="guest">
										<Form.Label>Number of Guests</Form.Label>
										<Form.Control as="select" onChange={handleChange}>
											<option>0</option>
											<option>1</option>
											<option>2</option>
										</Form.Control>
									</Form.Group>
									<Form.Group controlId="address">
										<Form.Label>Address</Form.Label>
										<Form.Control
											as="textarea"
											maxLength="50"
											onChange={handleChange}
											required
										/>
									</Form.Group>
									<div className="button">
										<Button variant="primary" type="submit">
											Register
										</Button>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</div>
				</Col>
			</Row>
		</>
	);
}
