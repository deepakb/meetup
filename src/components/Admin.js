import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';

import Search from './Search';
import UserList from './UserList';
import { SearchContext } from '../contexts/SearchContext';

export default function Admin() {
	const { filterUsers } = useContext(SearchContext);

	return (
		<>
			<Card>
				<Card.Header>
					<h3>Search Participants</h3>
				</Card.Header>
				<Card.Body>
					<Search />
					{filterUsers !== null && (
						<div className="searchResult">
							<Card>
								<Card.Header>
									<h3>Search Results:</h3>
								</Card.Header>
								<Card.Body>
									<UserList />
								</Card.Body>
							</Card>
						</div>
					)}
				</Card.Body>
			</Card>
		</>
	);
}
