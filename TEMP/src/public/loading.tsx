import { FC, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/theme';
import { Global } from '../styles/global';
import { Container, Letter, LoadingStyled } from '../styles/loading.styles';

interface loadingProps {}

export const Loading: FC<loadingProps> = ({}) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Container style={{background: theme.background, color:theme.text}}>
			<LoadingStyled>
				<Letter>G</Letter>
				<Letter>N</Letter>
				<Letter>I</Letter>
				<Letter>D</Letter>
				<Letter>A</Letter>
				<Letter>O</Letter>
				<Letter>L</Letter>
			</LoadingStyled>
		</Container>
	);
};
