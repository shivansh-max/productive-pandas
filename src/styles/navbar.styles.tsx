import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { mobileSize, headerHeight, tabletSize } from './variables';

interface RouterProps {
	extended?: boolean;
}

const NavContainer = styled.nav<RouterProps>`
	width: 100%;
	height: ${headerHeight};
	display: flex;
	flex-direction: column;
	padding: 0 3%;
	z-index: 69;

	@media (max-width: ${mobileSize}) {
		height: ${({ extended }) => (extended ? '100vh' : '80px')};
		background-color: ${({ extended, theme }) =>
			extended ? theme.background : 'transparent'};
	}
`;

const LogoContainer = styled(RouterLink)<RouterProps>`
	flex: 30%;
	padding-right: 50px;
	display: flex;
	align-items: center;
	font-size: 1.69rem;

	svg {
		color: ${({ theme }) => theme.accent};
	}
`;

const LogoText = styled.h1<RouterProps>`
	font-size: 1.2rem;
	color: ${({ theme }) => theme.subAccent};

	@media (max-width: ${mobileSize}) {
		display: none;
	}
`;

const LinkExtended = styled(RouterLink)<RouterProps>`
	color: ${({ theme }) => theme.text};
	font-size: 1.5rem;
	text-decoration: none;
	margin: 40px 10px;
`;

const HamburgerMenu = styled.button<RouterProps>`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: ${({ theme }) => theme.text_color};
	font-size: 2rem;
	cursor: pointer;
	@media (min-width: ${mobileSize}) {
		display: none;
	}
`;

const NavExtendedContainer = styled.div<RouterProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: ${mobileSize}) {
		display: none;
	}
`;

const NavIcon = styled(RouterLink)<RouterProps>`
	color: ${({ theme }) => theme.subText};
	text-decoration: none;
	font-size: 1.5rem;
	margin: 0px 15px;
	transition: 200ms;
	&:hover {
		color: ${({ theme }) => theme.text};
	}
	@media (min-width: ${tabletSize}) {
		font-size: 1.69rem;
	}
	@media (max-width: ${mobileSize}) {
		display: none;
	}
`;

// Classes that don't need props
const Links = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const NavLinkContainer = styled.div<RouterProps>`
	display: flex;
`;

const NavInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export {
	NavContainer,
	Links,
	LogoContainer,
	NavExtendedContainer,
	NavInnerContainer,
	HamburgerMenu,
	LinkExtended,
	NavLinkContainer,
	LogoText,
	NavIcon,
};
