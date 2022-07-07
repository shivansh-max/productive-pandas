import React from 'react';
import { CurrentWeather } from '../components/home/CurrentWeather';
import { HomeContainer } from '../components/home/styles';

export const Home = ({weather, setWeather, city, setCity, error, setError}) => {


	return weather === null || weather === undefined ? (
		'loading'
	) : (
		<HomeContainer>
			<CurrentWeather
				weather={weather}
				setWeather={setWeather}
				city={city}
				setCity={setCity}
				error={error}
				setError={setError}
			/>
		</HomeContainer>
	);
};
