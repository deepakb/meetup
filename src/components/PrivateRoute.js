import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
	const user = localStorage.getItem('userName');

	return (
		<Route
			{...rest}
			render={(props) => {
				return user ? <Component {...props} /> : <Redirect to="/login" />;
			}}
		></Route>
	);
}
