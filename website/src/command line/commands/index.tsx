import { FC, useState } from 'react';
import { Themes } from './themes';

interface commandsProps {}

export const Commands: FC<commandsProps> = () => {
	const [second, setSecond] = useState<boolean>(false);
	return (
		<>
			<Themes second={second} setSecond={setSecond} />
		</>
	);
};
