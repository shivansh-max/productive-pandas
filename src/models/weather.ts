// Creating and exporting the interface
class weather {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;

	constructor(weather: weatherTemp) {
		this.coord = weather.coord;
		this.weather = weather.weather;
		this.base = weather.base;
		this.main = weather.main;
		this.visibility = weather.visibility;
		this.wind = weather.wind;
		this.clouds = weather.clouds;
		this.dt = weather.dt;
		this.sys = weather.sys;
		this.timezone = weather.timezone;
		this.id = weather.id;
		this.name = weather.name;
		this.cod = weather.cod;
	}
}

const loadingWeather = new weather({
	coord: { lon: 0, lat: 0 },
	weather: [
		{ id: 0, main: 'loading...', description: 'loading...', icon: '000' },
	],
	base: 'loading...',
	main: {
		temp: 0,
		feels_like: 0,
		temp_min: 0,
		temp_max: 0,
		pressure: 0,
		humidity: 0,
	},
	visibility: 0,
	wind: { speed: 0, deg: 0 },
	clouds: { all: 0 },
	dt: 0,
	sys: {
		type: 0,
		id: 0,
		country: 'loading...',
		sunrise: 0,
		sunset: 0,
	},
	timezone: 0,
	id: 0,
	name: 'loading...',
	cod: 0,
});

interface weatherTemp {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export {weather, loadingWeather}