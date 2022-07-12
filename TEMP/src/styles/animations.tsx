import { keyframes } from 'styled-components';

const loadingMove = keyframes`
    		0% {
			left: 0;
			opacity: 0;
		}
		35% {
			left: 41%;
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
			opacity: 1;
		}
		65% {
			left: 59%;
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
			opacity: 1;
		}
		100% {
			left: 100%;
			-moz-transform: rotate(-180deg);
			-webkit-transform: rotate(-180deg);
			-o-transform: rotate(-180deg);
			transform: rotate(-180deg);
			opacity: 0;
		}
`;

export {loadingMove}