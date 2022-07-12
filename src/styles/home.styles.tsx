// Import
import styled from 'styled-components';
import { centerMixin, fonts, mobileSize } from './variables';

const HomeContainer = styled.div`
	padding: 4rem 5rem;
	color: ${({ theme }) => theme.text};
	@media (max-width: ${mobileSize}) {
		${centerMixin}
	}
	height: 75vh;
`;

const CenterInputHome = styled.div`
	@media (max-width: ${mobileSize}) {
		${centerMixin}
	}
`;

const CityInput = styled.input<{ error: boolean }>`
	background-color: transparent;
	border: none;
	outline: none;
	color: ${({ theme }) => theme.text};
	font-family: ${fonts.Montserrat};
	font-size: 1.42rem;
	border: 1px transparent solid;
	padding: 2px;
	border-color: ${({ error }) => (error ? 'red' : '')};

	@media (max-width: ${mobileSize}) {
		font-size: 1.2rem;
	}
`;

const CurrentWeatherContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: ${mobileSize}) {
		display: flex;
		flex-direction: column;

		* {
			text-align: center;
			align-items: center;
		}
	}
`;

const InputContainer = styled.div`
	width: 50%;
`;

const Temperature = styled.h1`
	margin-top: 5px;
`;

const TemperatureUnit = styled.select`
	color: ${({ theme }) => theme.accent};
	background-color: transparent;
	font-size: 2rem;
	font-family: ${fonts.Montserrat};
	border: none;
	outline: none;
	appearance: none;

	@media (max-width: ${mobileSize}) {
		font-size: 4rem;
		text-align: center;
	}
`;

const TemperatureUnitOption = styled.option``;

const OtherData = styled.data`
	width: 50%;
	text-align: right;
	margin-top: 5px;
`;

const Time = styled.h1`
	font-size: 1.69rem;
`;

const Date = styled.h3`
	margin-top: 5px;
`;

export {
	HomeContainer,
	CityInput,
	InputContainer,
	Temperature,
	TemperatureUnit,
	TemperatureUnitOption,
	OtherData,
	Time,
	Date,
	CurrentWeatherContainer,
	CenterInputHome,
};
