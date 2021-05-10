import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error(`useAuth must be used within a AuthProvider`);
	}

	const [currentUser, setCurrentUser] = context;

	return { currentUser, setCurrentUser };
};

const AuthProvider = (props) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = React.useMemo(() => [currentUser, setCurrentUser], [
		currentUser,
	]);

	return <AuthContext.Provider value={value} {...props} />;
};

export { useAuth, AuthProvider  };
