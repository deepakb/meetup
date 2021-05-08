import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
	it('renders website name', () => {
		render(<App />);
		expect(screen.getByText('MEETUP PORTAL')).toBeInTheDocument();
	});
});
