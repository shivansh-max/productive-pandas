import React, {useContext} from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { CommandContainer, CommandIconTheme, CommandText } from '../../styles';
import { themes } from './themes.temp';

export const List = () => {
	const { setTheme } = useContext(ThemeContext);
	return (
		<div>
			{themes.map((theme, i) => (
				<CommandContainer key={i} onClick={() => setTheme(theme)}>
					<CommandIconTheme accent={theme.accent} />
					<CommandText
						text={theme.text_color}
						background={theme.background}>
						{theme.name}
					</CommandText>
				</CommandContainer>
			))}
		</div>
	);
};
