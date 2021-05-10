import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

import Layout from './Layout';
import Home from './Home';
import Admin from './Admin';
import Report from './Report';
import UserDetail from './UserDetail';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import { SearchProvider } from '../contexts/SearchContext';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<SearchProvider>
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<PrivateRoute exact path="/admin" component={Admin} />
							<Route path="/admin/:id" component={UserDetail} />
							<Route path="/report" component={Report} />
							<Route path="/login" component={Login} />
							<Redirect to="/" />
						</Switch>
					</Layout>
				</SearchProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
