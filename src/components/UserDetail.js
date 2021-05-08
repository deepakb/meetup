import React from 'react';
import { useParams } from 'react-router-dom';
import {
	Card,
	Button,
	ListGroup,
	ListGroupItem,
	NavLink,
} from 'react-bootstrap';

import { users } from '../configs/config';

export default function UserDetail() {
	const { id } = useParams();
	const fUser = users.filter((user) => user.id === id);
	const userInfo = fUser[0];

	return (
		<Card>
			<Card.Header as="h5">{userInfo.name}</Card.Header>
			<ListGroup className="list-group-flush">
				<ListGroupItem>
					<b>Age:</b>
					<span>{userInfo.age}</span>
				</ListGroupItem>
				<ListGroupItem>
					<b>D.O.B:</b>
					<span>{userInfo.dob}</span>
				</ListGroupItem>
				<ListGroupItem>
					<b>Profession:</b>
					<span>{userInfo.profession}</span>
				</ListGroupItem>
				<ListGroupItem>
					<b>Locality:</b>
					<span>{userInfo.locality}</span>
				</ListGroupItem>
				<ListGroupItem>
					<b>Number of Guests:</b>
					<span>{userInfo.noOfGuest}</span>
				</ListGroupItem>
				<ListGroupItem>
					<b>Address:</b>
					<span>{userInfo.address}</span>
				</ListGroupItem>
			</ListGroup>
			<Card.Body>
				<NavLink href="/admin">
					<Button variant="primary">Back to Search</Button>
				</NavLink>
			</Card.Body>
		</Card>
	);
}
