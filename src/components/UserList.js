import React, { useContext } from 'react';
import { Table, NavLink, Alert } from 'react-bootstrap';

import { SearchContext } from '../contexts/SearchContext';

export default function UserList() {
	const { filterUsers } = useContext(SearchContext);

	return (
		<>
			{filterUsers.length > 0 ? (
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Locality</th>
							<th>Profession</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{filterUsers.map((user, index) => (
							<tr key={user.id}>
								<td>{index + 1}</td>
								<td>
									<NavLink href={`/admin/${user.id}`}>{user.name}</NavLink>
								</td>
								<td>{user.locality}</td>
								<td>{user.profession}</td>
								<td>{user.age}</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<div>
					<Alert variant="danger">
						<Alert.Heading>Hey, No results found for your input.</Alert.Heading>
						<p>
							Please try again with a matching participant's name or locality.
						</p>
					</Alert>
				</div>
			)}
		</>
	);
}
