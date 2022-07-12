// Imports
import { createContext, FC, useEffect, useState } from 'react';

// creating a time context so you know what you get
interface timeContext {
	time: string;
	date: string;
	setTime: (time: string) => void;
	setDate: (date: string) => void;
}

// creating the time context
const TimeContext = createContext<timeContext>({
	time: '',
	date: '',
	setTime: () => {},
	setDate: () => {},
});

// creating an interface that defines the props
interface timeProps {
	children: JSX.Element[] | JSX.Element;
}

// creating the time provider that will wrap the rest of the app
const TimeProvider: FC<timeProps> = ({ children }) => {
	const [time, setTime] = useState<string>('');
	const [date, setDate] = useState<string>('');

	useEffect(() => {
		const interval = setInterval(() => {
			const current = new window.Date();

			setTime(formatTime(current))
			setDate(formatDate(current))
		});
		return () => clearInterval(interval)
	});

	return (
		<TimeContext.Provider value={{ time, date, setTime, setDate }}>
			{children}
		</TimeContext.Provider>
	);
};

function formatTime(date: Date) {
	const hours12 = date.getHours() % 12 || 12;
	const minutes = date.getMinutes();
	const isAm = date.getHours() < 12;

	return `${hours12.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`;
}

function formatDate(date: Date) {
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

export { TimeProvider, TimeContext };
