import {
	CommandContainer,
	CommandIcon2,
	CommandText,
} from '../../../styles/cmd.styles';

interface listItemProps<O> {
	icon: JSX.Element;
	obj: O;
	name: string;
	trigger: (obj: O) => void;
}

export const ListItem = <O extends unknown>({
	name,
	icon,
	obj,
	trigger,
}: listItemProps<O>) => {
	return (
		<CommandContainer
			onClick={() => {
				trigger(obj);
			}}>
			<CommandIcon2>{icon}</CommandIcon2>
			<CommandText>{name}</CommandText>
		</CommandContainer>
	);
};
