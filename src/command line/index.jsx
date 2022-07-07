import React, { useEffect } from 'react';
import { CMD, CMDContainer } from './styles';
import { SearchBar } from './SearchBar';
import { Commands } from './commands';

export const CommandLine = ({ status, setStatus }) => {
	useEffect(() => {
		document.addEventListener(
			'keydown',
			(e) => {
				if (e.key === 'p' && e.shiftKey && e.metaKey) {
					setStatus(true);
				}
				if (e.key === 'Escape') {
					setStatus(false);
				}
			},
			true
		);
	}, []);

	return status ? (
		<CMDContainer>
			<CMD>
				<SearchBar />
				<Commands />
			</CMD>
		</CMDContainer>
	) : (
		''
	);
};
