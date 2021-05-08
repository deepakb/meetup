import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('NavBar Component', () => {
	it('Find Home menu', () => {
		render(<App />);
		expect(screen.getByText('Home')).toBeInTheDocument();
	});

	it('Find Admin menu', () => {
		render(<App />);
		expect(screen.getByText('Admin')).toBeInTheDocument();
	});

	it('Find Report menu', () => {
		render(<App />);
		expect(screen.getByText('Admin')).toBeInTheDocument();
	});
});
