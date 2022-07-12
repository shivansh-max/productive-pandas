import styled from 'styled-components';
import { globalProps } from '../models';
import { loadingMove } from './animations';
import { fonts } from './variables';

const altered_duration = (index: number) =>
	`
        div:nth-child(${index}) {
        animation-delay: ${index * 0.2}s;
		-o-animation-delay: ${index * 0.2}s;
		-moz-animation-delay: ${index * 0.2}s;
		-webkit-animation-delay: ${index * 0.2}s;
        }
    `;

const animations = [2, 3, 4, 5, 6, 7];

const LoadingStyled = styled.div`
	position: absolute;
	width: 600px;
	height: 36px;
	left: 50%;
	top: 40%;
	background-color: ${({ theme }) => theme.background};
	margin-left: -300px;
	overflow: visible;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: default;

	${animations.map((anim) => altered_duration(anim))}
`;

const Letter = styled.div<globalProps>`
	position: absolute;
	width: 20px;
	height: 36px;
	opacity: 0;
	animation: ${loadingMove} 2s linear infinite;
	-o-animation: ${loadingMove} 2s linear infinite;
	-moz-animation: ${loadingMove} 2s linear infinite;
	-webkit-animation: ${loadingMove} 2s linear infinite;
	transform: rotate(180deg);
	-o-transform: rotate(180deg);
	-moz-transform: rotate(180deg);
	-webkit-transform: rotate(180deg);
	color: ${({ theme }) => theme.text};
`;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	color: ${({ theme }) => theme.text};
	font-family: ${fonts.Comfortaa};
	background-color: ${({ theme }) => theme.background};
	margin: 0;
	padding: 0;
	position: absolute;
	left: 0;
	top: 0;
`;

export { LoadingStyled, Letter, Container };
