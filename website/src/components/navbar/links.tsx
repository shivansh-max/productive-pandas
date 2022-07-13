//Imports
import { FC } from 'react';
import { link } from '../../models';
import { links } from './links.stored';
import {
	NavIcon,
	Links as StyledLinks,
	LinkExtended,
	NavExtendedContainer,
} from '../../styles/navbar.styles';

//Prop for individual link
interface LinkProp {
	link: link;
	extended: boolean;
}

export const Link: FC<LinkProp> = ({ link, extended }) => {
	// Conditioning weather to render a responsive link of a regular link
	return !extended ? (
		<NavIcon to={link.to}>{link.icon}</NavIcon>
	) : (
		<LinkExtended to={link.to}>{link.name}</LinkExtended>
	);
};

// Props of links
interface LinksProps {
	children?: JSX.Element;
	extended?: boolean;
}

export const Links: FC<LinksProps> = ({ extended = false, children }) => {

	// Conditioning weather to render a responsive layout or a regular layout
	return !extended ? (
		<StyledLinks>
			{links.map((link, i) => (
				<Link link={link} key={i} extended={extended} />
			))}
			{children}
		</StyledLinks>
	) : (
		<NavExtendedContainer>
			{links.map((link, i) => (
				<Link link={link} key={i} extended={extended} />
			))}
		</NavExtendedContainer>
	);
};
