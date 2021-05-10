import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { users } from '../configs/config';
import { useSearch } from '../contexts/SearchContext';

export default function Search() {
	const [searchString, setSearchString] = useState('');
	const { setFilterUsers } = useSearch();

	const handleChange = (e) => {
		const searchString = e.target.value;
		setSearchString(searchString);
	};

	const searchUsers = (e) => {
		e.preventDefault();
		const result = [];
		users.forEach((user) => {
			if (
				user.name.indexOf(searchString) !== -1 ||
				user.locality.indexOf(searchString) !== -1
			) {
				result.push(user);
			}
		});
		setFilterUsers(result);
	};

	return (
		<Form onSubmit={searchUsers}>
			<Row>
				<Col sm={4}>
					<Form.Group controlId="search">
						<Form.Control
							type="text"
							placeholder="Search participants by Name and Locality"
							onChange={handleChange}
							required
						/>
					</Form.Group>
				</Col>
				<Col sm={2}>
					<Button type="submit">Submit</Button>
				</Col>
			</Row>
		</Form>
	);
}
