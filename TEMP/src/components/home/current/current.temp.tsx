import { FC, useContext } from 'react';
import { WeatherContext } from './../../../contexts/weather';
import {
	CenterInputHome,
	Temperature,
	TemperatureUnit,
	TemperatureUnitOption,
} from './../../../styles/home.styles';
const convertCtoK = 273.15;
const convertCtoKtoF = 9 / 5; // Then you would need to add 32

const convertTemp = (k: number, d: string): number =>
	d === 'F'
		? Math.round((k - convertCtoK) * convertCtoKtoF + 32)
		: Math.round(k - convertCtoK);

interface tempProps {}

export const Temp: FC<tempProps> = () => {
	const { unit, weather, setUnit } = useContext(WeatherContext);

	return (
		<CenterInputHome>
			<Temperature>
				<TemperatureUnit
					value={unit}
					onChange={(e) => setUnit(e.target.value)}>
					<TemperatureUnitOption value={'F'}>
						{convertTemp(weather.main.temp, 'F')} °F
					</TemperatureUnitOption>{' '}
					<TemperatureUnitOption value={'C'}>
						{convertTemp(weather.main.temp, 'C')} °C
					</TemperatureUnitOption>
				</TemperatureUnit>
			</Temperature>
		</CenterInputHome>
	);
};
