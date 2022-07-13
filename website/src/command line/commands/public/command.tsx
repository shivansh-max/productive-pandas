import { Dispatch, FC, SetStateAction } from 'react';
import {
	CommandContainer,
	CommandIcon,
	CommandText,
} from '../../../styles/cmd.styles';

interface commandProps {
	name: string;
	icon: JSX.Element;
	setSecond: Dispatch<SetStateAction<boolean>>;
}

export const Command: FC<commandProps> = ({ icon, name, setSecond }) => {
	return (
		<CommandContainer onClick={() => setSecond(true)}>
			<CommandIcon>{icon}</CommandIcon>
			<CommandText>{name}</CommandText>
		</CommandContainer>
	);
};
