import { FC, useContext } from 'react';
import { WeatherContext } from '../../../contexts/weather';
import { CenterInputHome, CityInput } from '../../../styles/home.styles';
import { getWeather } from '../../../public/api';

interface inputProps {}

export const Input: FC<inputProps> = () => {
	const { city, setWeather, setError, setCity, error } =
		useContext(WeatherContext);

	return (
		<CenterInputHome>
			<CityInput
				placeholder='City Name'
				value={city}
				onChange={(e) => setCity(e.target.value)}
				onBlur={() =>
					getWeather(true, setWeather, setError, setCity, city, 0, 0)
				}
				error={error}
			/>
		</CenterInputHome>
	);
};
