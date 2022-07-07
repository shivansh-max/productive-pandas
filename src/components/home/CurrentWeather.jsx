import React, { useState, useEffect } from 'react';
import {
	CityInput,
	Date,
	InputContainer,
	OtherData,
	Temperature,
	TemperatureUnit,
	TemperatureUnitOption,
	CurrentWeatherContainer,
	Time,
	CenterInputHome,
} from './styles';
import {
	getWeather,
	formatDate,
	formatTime,
	convertTemp,
} from '../../public/Utilities';

export const CurrentWeather = ({
	weather,
	setWeather,
	city,
	setCity,
	error,
	setError,
}) => {
	const [unit, setUnit] = useState('F');
	const [time, setTime] = useState();
	const [date, setDate] = useState();
	
	useEffect(() => {
		const interval = setInterval(() => {
			const now = new window.Date();

			setTime(formatTime(now));
			setDate(formatDate(now));
		}, 200);
		setCity(weather['name']);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		document.addEventListener(
			'keypress',
			(e) => {
				if (e.key === 'k') {
					setUnit('K');
				} else if (e.key === 'f') {
					setUnit('F');
				} else if (e.key === 'c') {
					setUnit('C');
				}
			},
			true
		);
	}, []);

	return (
		<CurrentWeatherContainer>
			<InputContainer>
				<CenterInputHome>
					<CityInput
						value={city}
						onChange={(e) => setCity(e.target.value)}
						placeholder='Set Your City'
						onBlur={() =>
							getWeather(
								true,
								city,
								null,
								null,
								setWeather,
								setError
							)
						}
						error={error}
					/>
				</CenterInputHome>

				<CenterInputHome>
					<Temperature>
						<TemperatureUnit
							value={unit}
							onChange={(e) => setUnit(e.target.value)}>
							<TemperatureUnitOption value='F'>
								{weather === null || weather === undefined
									? 'loading'
									: convertTemp(weather['main']['temp'], 'F')}
								° F
							</TemperatureUnitOption>
							<TemperatureUnitOption value='C'>
								{weather === null || weather === undefined
									? 'loading'
									: convertTemp(weather['main']['temp'], 'C')}
								° C
							</TemperatureUnitOption>
						</TemperatureUnit>
					</Temperature>
				</CenterInputHome>
			</InputContainer>

			<OtherData>
				<Time>{time}</Time>
				<Date>{date}</Date>
			</OtherData>
		</CurrentWeatherContainer>
	);
};
