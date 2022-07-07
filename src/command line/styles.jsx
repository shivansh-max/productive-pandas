import styled from 'styled-components';
import { centerMixin, fonts } from './../styles/variables';
import {BsPaintBucket} from 'react-icons/bs'

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
	font-size: 20px;
	font-family: ${fonts.Mukta_Vaani};
	color: ${({ theme }) => theme.text_color};
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
	color: ${({ theme }) => theme.text_color};
	${centerMixin}
	cursor: pointer;
	transition: 100ms;
`;

export const CommandIcon = styled.div`
	width: 5%;
	${centerMixin}
	&:hover {
		color: ${({ theme }) => theme.accent};
	}
`;

export const CommandIconTheme = styled(BsPaintBucket)`
	width: 5%;
	${centerMixin}
	color: ${({accent}) => accent};
`;

export const CommandText = styled.h4`
	color: ${({ text }) => text};
	width: 95%;
	&:hover {
		color: ${({ theme }) => theme.accent};
	}
`;