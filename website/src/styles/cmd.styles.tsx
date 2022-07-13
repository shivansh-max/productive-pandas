import styled from 'styled-components';
import { fonts, centerMixin } from './variables';

export const CMDContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(33, 33, 33, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CMD = styled.div`
	background-color: ${({ theme }) => theme.background};
	width: 60vw;
	height: 80vh;
	border-radius: 15px;
	padding: 15px;
	overflow-y: auto;
`;

export const CMDInput = styled.input`
	width: 95%;
	background-color: transparent;
	height: 35px;
	border: none;
	outline: none;
	margin-left: 5px;
	font-size: 20px;
	font-family: ${fonts.Mukta_Vaani};
	color: ${({ theme }) => theme.text};
`;

export const CMDForm = styled.div`
	${centerMixin}
	margin-bottom: 10px;
	height: 35px;
`;
export const CMDSearch = styled.button`
	width: 5%;
	height: 35px;
	font-size: 20px;
	font-weight: 900;
	background-color: transparent;
	border: none;
	outline: none;
	color: ${({ theme }) => theme.accent};
`;

export const CommandContainer = styled.div`
	margin: 12px 0px;
	font-size: 15px;
	color: ${({ theme }) => theme.text};
	${centerMixin}
	cursor: pointer;
	transition: 100ms;
`;

export const CommandIcon = styled.div`
	width: 5%;
	${centerMixin}
	color: ${({ theme }) => theme.accent};
`;
export const CommandIcon2 = styled.div`
	width: 5%;
	${centerMixin}
	color: ${({ theme }) => theme.subAccent};
`;

export const CommandText = styled.h4`
	color: ${({ theme }) => theme.text2};
	width: 95%;
	transition: 400ms;

	&:hover {
		color: ${({ theme }) => theme.text};
	}
`;
