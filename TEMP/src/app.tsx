// Imports
import { FC, useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/navbar';
import { Router } from './public/router';
import { Global } from './styles/global';

const App: FC = () => {
	// Accessing Theme
	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Global />
			<Router />
		</ThemeProvider>
	);
};

// Export
export default App;
