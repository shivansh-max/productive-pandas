import { FC } from 'react';
import {
	InputContainer,
	CurrentWeatherContainer,
} from '../../../styles/home.styles';
import { Input } from './current.input';
import { Temp } from './current.temp';
import { TimeDate } from './current.time';

interface CurrentProps {}

export const Current: FC<CurrentProps> = () => {

	return (
		<CurrentWeatherContainer>
			<InputContainer>
				<Input />
				<Temp />
			</InputContainer>
			<TimeDate />
		</CurrentWeatherContainer>
	);
};