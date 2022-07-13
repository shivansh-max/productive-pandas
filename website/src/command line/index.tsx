import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { CMD, CMDContainer } from '../styles/cmd.styles';
import { SearchBar } from './cmd.search';
import { Commands } from './commands';

interface cmdProps {}

const manage = (
	e: KeyboardEvent,
	setStatus: Dispatch<SetStateAction<boolean>>
) => {
	if (e.key === 'p' && e.shiftKey && e.metaKey) {
		setStatus(true);
	}
	if (e.key === 'Escape') {
		setStatus(false);
	}
};

export const Cmd: FC<cmdProps> = () => {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		document.addEventListener('keydown', (e) => manage(e, setOpen), true);
	}, []);

	return open ? (
		<CMDContainer>
			<CMD>
				<SearchBar />
				<Commands />
			</CMD>
		</CMDContainer>
	) : (
		<></>
	);
};
