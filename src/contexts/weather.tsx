// Imports
import { useState, createContext, FC, useEffect } from 'react';
import { weather } from '../models';
import { loadingWeather } from '../models/weather';
import { getWeather } from '../public/api';
import { Loading } from '../public/loading';

// creating a  weather context interface so you know what you get
interface weatherContext {
	weather: weather;
	setWeather: (newWeather: weather) => void;
	error: boolean;
	setError: (error: boolean) => void;
	city: string;
	setCity: (city: string) => void;
	unit: string;
	setUnit: (unit: string) => void;
}

// Creating the weather context
const WeatherContext = createContext<weatherContext>({
	weather: loadingWeather,
	setWeather: () => {},
	error: true,
	setError: () => {},
	city: 'string',
	setCity: () => {},
	unit: 'f',
	setUnit: () => {},
});

// Creating a interface that defines the props
interface weatherProps {
	children: JSX.Element[] | JSX.Element;
}

// Creating the theme provider that will wrap the rest of the app
const WeatherProvider: FC<weatherProps> = ({ children }) => {
	const [weather, setWeather] = useState<weather>(loadingWeather);
	const [error, setError] = useState<boolean>(false);
	const [city, setCity] = useState<string>('New York');
	const [unit, setUnit] = useState<string>('F');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) =>
				getWeather(
					false,
					setWeather,
					setError,
					setCity,
					'',
					coords.longitude,
					coords.latitude
				),
			() => {
				getWeather(
					true,
					setWeather,
					setError,
					setCity,
					'New York',
					0,
					0
				);
			}
		);
	}, []);

	return (
		<WeatherContext.Provider
			value={{
				weather,
				setWeather,
				error,
				setError,
				city,
				setCity,
				unit,
				setUnit,
			}}>
			{weather === loadingWeather ? <Loading /> : children}
		</WeatherContext.Provider>
	);
};

export { WeatherContext, WeatherProvider };
