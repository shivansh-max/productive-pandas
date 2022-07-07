import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CommandLine } from './command line';
import { Navbar } from './components/navbar';
import { ThemeContext } from './contexts/ThemeContext';
import { Global } from './styles/global';
import { getWeather } from './public/Utilities';
import { Router } from './public/Router';

export const App = () => {
	const { theme } = useContext(ThemeContext);
	const [commandLine, setCommandLine] = useState(true);
	const [city, setCity] = useState('New York');
	const [weather, setWeather] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function ({ coords }) {
				getWeather(
					false,
					null,
					coords.longitude,
					coords.latitude,
					setWeather,
					setError
				);
			},
			function (error) {
				getWeather(true, city, null, null, setWeather, setError);
			}
		);
	}, [city]);

	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Global />
			<CommandLine status={commandLine} setStatus={setCommandLine} />
			<Router
				weather={weather}
				setWeather={setWeather}
				city={city}
				setCity={setCity}
				error={error}
				setError={setError}
			/>
		</ThemeProvider>
	);
};

// Weather background images Alec Kim
