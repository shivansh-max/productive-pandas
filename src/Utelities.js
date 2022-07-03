import axios from "axios";

const weather_api_key = 'fdebe23da7db60522fe2952ca445f7dd';

const getWeatherApiUrl = (cityBased, city, long, lat) => {
	if (cityBased) {
		return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}`;
	} else {
		return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weather_api_key}`;
	}
};

const getWeather = (cityBased, city, long, lat, setWeather) => {
	axios
		.get(getWeatherApiUrl(cityBased, city, long, lat))
		.then((response) => {
			setWeather(response.data);
		});
};

export { weather_api_key, getWeatherApiUrl, getWeather };
