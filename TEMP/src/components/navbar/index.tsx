//Imports 
import { FC, useState } from 'react';
import {
	HamburgerMenu,
	LogoContainer,
	LogoText,
	NavContainer,
	NavInnerContainer,
	NavLinkContainer,
} from '../../styles/navbar.styles';
import { Logo } from '../../public/logo';
import { Links } from './links';
import { HiOutlineMenuAlt3, HiMenu } from 'react-icons/hi';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
	// Creating state for the responsive layout
	const [extended, setExtended] = useState<boolean>(false);

	return (
		<NavContainer extended={extended}>
			<NavInnerContainer>
				<LogoContainer to={'/'}>
					<Logo />
					<LogoText>productive pandas</LogoText>
				</LogoContainer>
				<NavLinkContainer>
					<Links>
						{/* Toggling the state */}
						<HamburgerMenu onClick={() => setExtended(!extended)}>
							{extended ? <HiMenu /> : <HiOutlineMenuAlt3 />}
						</HamburgerMenu>
					</Links>
				</NavLinkContainer>
			</NavInnerContainer>
			{extended && <Links extended={true} />}
		</NavContainer>
	);
};
