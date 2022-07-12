//Imports
import axios from 'axios';
import { weather } from '../models/';

// Weather api key
const weather_api_key = '2f78ed0ba6b22e96809b149d585cc734';
const weather_api_baseurl = 'https://api.openweathermap.org/data/2.5/weather';

// Creating an axios weather api
const weather_api = axios.create({
	baseURL: weather_api_baseurl,
});

interface weather_api_params {
	appid: string;
	q?: string;
	lon?: number;
	lat?: number;
}

const getWeather = (
	cityBased: boolean,
	setWeather: (weather: weather) => void,
	setError: (state: boolean) => void,
	setCity: (city: string) => void,
	city?: string,
	long?: number,
	lat?: number
): void => {

	// Creating default props with appiid
	let params: weather_api_params = {
		appid: weather_api_key,
	};

	// Based on cityBased
	if (cityBased) {
		params = {
			...params,
			q: city,
		};
	} else {
		params = {
			...params,
			lat: lat,
			lon: long,
		};
	}

	weather_api
		.get('', { params: params })
		.then((res) => {
			setWeather(new weather(res.data));
			setCity(res.data.name);
			setError(false);
		})
		.catch((error) => {
			setError(true);
			console.error(error);
		});
};

export {weather_api, getWeather}
