import styled, { createGlobalStyle } from 'styled-components';
import { fonts, theme } from './variables';

const Global = createGlobalStyle`

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: ${theme.background};
		font-family: ${fonts.Comfortaa};
	}

	#root {
		height: 100%;
	}

	a {
			color: inherit;
	text-decoration: none;
	}

	ul {
		list-style-type: none;
	}

	li {
		text-decoration: none;
	}

`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { Center, Global };

// 	@media only screen and (max-width: ${mobileSize}) {}