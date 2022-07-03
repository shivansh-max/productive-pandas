import React, { useEffect, useState } from 'react';
import { getWeather } from '../Utelities';

export const Home = () => {
	const [city, setCity] = useState();
	const [weather, setWeather] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			const coor = position.coords;
			getWeather(false, null, coor.longitude, coor.latitude, setWeather);
		});
	}, []);

	const fetchWeather = (e) => {
		e.preventDefault();
		getWeather(true, city, null, null, setWeather);
		setCity('');
	};

	return (
		<>
			<form onSubmit={fetchWeather}>
				<input
					type='text'
					value={city}
					onChange={(e) => setCity(e.target.value)}
					onBlur={() =>
						getWeather(true, city, null, null, setWeather)
					}
				/>
				<button type='submit'>Submit</button>
			</form>
			{/* {JSON.stringify(weather)} */}
		</>
	);
};
