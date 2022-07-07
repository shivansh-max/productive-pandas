import axios from 'axios';

const weather_api_key = 'fdebe23da7db60522fe2952ca445f7dd';

const getWeatherApiUrl = (cityBased, city, long, lat) => {
	return `http://api.openweathermap.org/data/2.5/weather?appid=${weather_api_key}&${
		cityBased ? `q=${city}` : `lat=${lat}&lon=${long}`
	}`;
};

const getWeather = (cityBased, city, long, lat, setWeather, setError) => {
	
	axios.get(getWeatherApiUrl(cityBased, city, long, lat)).then((response) => {
		setWeather(response.data);
		setError(false);
	}, (err) => {
		setError(true)
	});
};

function formatTime(date) {
	const hours12 = date.getHours() % 12 || 12;
	const minutes = date.getMinutes();
	const isAm = date.getHours() < 12;

	return `${hours12.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`;
}

function formatDate(date) {
	const DAYS = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	return `${DAYS[date.getDay()]}, ${
		MONTHS[date.getMonth()]
	} ${date.getDate()} ${date.getFullYear()}`;
}

const convertTemp = (k, d) => {
	if (d === 'F') {
		return Math.round(((k - 273.15) * 9) / 5 + 32);
	}
	return Math.round(k - 273.15);
};

const ManageCMD = (e, setCommandLine) => {
	if (e.key === 'p' && e.shiftKey && e.metaKey) {
		setCommandLine(true);
	}
	if (e.key === 'Escape') {
		setCommandLine(false);
	}
};

export {
	weather_api_key,
	getWeatherApiUrl,
	getWeather,
	formatDate,
	formatTime,
	convertTemp,
	ManageCMD
};
