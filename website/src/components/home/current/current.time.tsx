import { FC, useContext } from 'react';
import { TimeContext } from '../../../contexts/time';
import { OtherData, Time } from '../../../styles/home.styles';

interface timeProps {}

export const TimeDate: FC<timeProps> = () => {
	const { time, date } = useContext(TimeContext);

	return (
		<OtherData>
			<Time>{time}</Time>
			<Time>{date}</Time>
		</OtherData>
	);
};
