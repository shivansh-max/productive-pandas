import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { headerHeight, mobileSize, theme } from '../../styles/variables';

export const NavContainer = styled.nav`
	width: 100%;
	height: ${headerHeight};
	display: flex;
	flex-direction: column;
	padding: 0 3%;

	@media (max-width: ${mobileSize}) {
		height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
	}
    
`;

export const Links = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const LogoContainer = styled(RouterLink)`
	flex: 30%;
	padding-right: 50px;
    display: flex;
    align-items: center;
    font-size: 1.69rem;
    color: ${theme.text_color};
`;

export const LogoText = styled.h1`
    font-size: 1.2rem;
    color: ${theme.text_color};
`

export const NavInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavLinkContainer = styled.div`
	display: flex;
`;

export const Link = styled(RouterLink)`
	color: ${theme.text_color};
	font-size: 1rem;
	text-decoration: none;
	margin: 10px;
	@media (max-width: ${mobileSize}) {
		display: none;
	}
`;

export const LinkExtended = styled(RouterLink)`
	color: ${theme.text_color};
	font-size: 1.5rem;
	text-decoration: none;
	margin: 10px;
`;

export const HamburgerMenu = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: ${theme.text_color};
	font-size: 2rem;
	cursor: pointer;
	@media (min-width: ${mobileSize}) {
		display: none;
	}
`;

export const NavExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
	@media (min-width: ${mobileSize}) {
		display: none;
	}
`;
