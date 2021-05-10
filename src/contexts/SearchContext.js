import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

const useSearch = () => {
	const context = useContext(SearchContext);

	if (!context) {
		throw new Error(`useSearch must be used within a SearchProvider`);
	}

	const [filterUsers, setFilterUsers] = context;

	return { filterUsers, setFilterUsers };
};

const SearchProvider = (props) => {
	const [filterUsers, setFilterUsers] = useState(null);
	const value = React.useMemo(() => [filterUsers, setFilterUsers], [
		filterUsers,
	]);

	return <SearchContext.Provider value={value} {...props} />;
};

export { useSearch, SearchProvider };
