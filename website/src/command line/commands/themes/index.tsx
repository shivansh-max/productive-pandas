import { FC, useContext } from 'react';
import { Command } from '../public/command';
import { CmdProps } from '../public/globalPropsCmd';
import { BsPaletteFill, BsPaintBucket } from 'react-icons/bs';
import { themes } from '../../../models/theme';
import { ListItem } from '../public/list';
import { ThemeContext } from '../../../contexts/theme';

export const Themes: FC<CmdProps> = ({ second, setSecond }) => {
	const { setTheme } = useContext(ThemeContext);

	return second ? (
		<>
			{themes.map((theme) => (
				<ListItem
					icon={<BsPaintBucket />}
					name={theme.name}
					obj={theme}
					trigger={setTheme}
				/>
			))}
		</>
	) : (
		<Command
			icon={<BsPaletteFill />}
			name={'theme'}
			setSecond={setSecond}
		/>
	);
};
