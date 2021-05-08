import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('NavBar Component', () => {
	beforeAll(() => {
		render(<App />);
	});

	it('Find Home menu', () => {
		//expect(screen.getByText('Home')).toBeInTheDocument();
		render(<App />);
	});

	// it('Find Admin menu', () => {
	// 	expect(screen.getByText('Admin')).toBeInTheDocument();
	// });

	// it('Find Report menu', () => {
	// 	expect(screen.getByText('Admin')).toBeInTheDocument();
	// });
});
