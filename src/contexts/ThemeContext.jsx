import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState({
		background: '#111114',
		text_color: '#ffffff',
		accent: '#75e1ff',
		name: 'cherry mx blues',
	});
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContextProvider, ThemeContext };
