import { FC } from 'react';
import { Current } from '../components/home/current/current';
import { HomeContainer } from '../styles/home.styles';

interface homeProps {}

export const Home: FC<homeProps> = () => {
	return (
		<HomeContainer>
			<Current />
		</HomeContainer>
	);
};
