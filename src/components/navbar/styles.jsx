import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { headerHeight, mobileSize } from '../../styles/variables';

const NavContainer = styled.nav`
	width: 100%;
	height: ${headerHeight};
	display: flex;
	flex-direction: column;
	padding: 0 3%;
	z-index: 69;

	@media (max-width: ${mobileSize}) {
		position: fixed;
		height: ${({ extendNavbar }) => (extendNavbar ? '100vh' : '80px')};
		background-color: ${({ extendNavbar, theme }) =>
			extendNavbar ? theme.background : 'transparent'};
	}
`;

const Links = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const LogoContainer = styled(RouterLink)`
	flex: 30%;
	padding-right: 50px;
	display: flex;
	align-items: center;
	font-size: 1.69rem;
	color: ${({ theme }) => theme.accent};
`;

const LogoText = styled.h1`
	font-size: 1.2rem;
	color: ${({ theme }) => theme.accent};

	@media (max-width: ${mobileSize}) {
		display: none;
	}
`;

const NavInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

const NavLinkContainer = styled.div`
	display: flex;
`;

const Link = styled(RouterLink)`
	color: ${({ theme }) => theme.text_color};
	font-size: 1rem;
	text-decoration: none;
	margin: 10px;
	@media (max-width: ${mobileSize}) {
		display: none;
	}
`;

const LinkExtended = styled(RouterLink)`
	color: ${({ theme }) => theme.text_color};
	font-size: 1.5rem;
	text-decoration: none;
	margin: 10px;
`;

const HamburgerMenu = styled.button`
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

const NavExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: ${mobileSize}) {
		display: none;
	}
`;

export {
	NavContainer,
	Links,
	LogoContainer,
	NavExtendedContainer,
	NavInnerContainer,
	Link,
	HamburgerMenu,
	LinkExtended,
	NavLinkContainer,
	LogoText,
};
