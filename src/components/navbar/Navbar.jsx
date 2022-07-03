import React, { useState } from 'react';
import {
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
} from './Navbar.styles';

import { Logo } from './../../public/Logo';

export const Navbar = () => {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavContainer extendNavbar={extendNavbar}>
			<NavInnerContainer>
				<LogoContainer to="/">
					<Logo />
					<LogoText>productive pandas</LogoText>
				</LogoContainer>
				<NavLinkContainer>
					<Links>
						<Link to='/todo'>Todo</Link>
						<Link to='/products'>Expense</Link>
						<Link to='/contact'>Shopping</Link>
						<Link to='/notes'>Notes</Link>
						<Link to='/donate'>Donate</Link>
						<Link to='/about'>About</Link>
						<HamburgerMenu
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}>
							{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
						</HamburgerMenu>
					</Links>
				</NavLinkContainer>
			</NavInnerContainer>
			{extendNavbar && (
				<NavExtendedContainer>
					<LinkExtended to='/'>Todo</LinkExtended>
					<LinkExtended to='/products'>Expense</LinkExtended>
					<LinkExtended to='/contact'>Shopping</LinkExtended>
					<LinkExtended to='/notes'>Notes</LinkExtended>
					<LinkExtended to='/donate'>Donate</LinkExtended>
					<LinkExtended to='/about'>About</LinkExtended>
				</NavExtendedContainer>
			)}
		</NavContainer>
	);
};
