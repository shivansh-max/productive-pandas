// Imports
import { link } from '../../models';

import { GrUnorderedList } from 'react-icons/gr';
import { CgNotes } from 'react-icons/cg';
import { AiOutlineDollar } from 'react-icons/ai';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { BiDonateHeart } from 'react-icons/bi';
import { BsLightbulb } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

const links: link[] = [
	{
		to: '/todo',
		icon: <GrUnorderedList />,
		name: 'todo',
	},
	{
		to: '/expenses',
		icon: <AiOutlineDollar />,
		name: 'expenses',
	},
	{
		to: '/shopping',
		icon: <RiShoppingBag2Fill />,
		name: 'shopping',
	},
	{
		to: '/notes',
		icon: <CgNotes />,
		name: 'notes',
	},
	{
		to: '/donate',
		icon: <BiDonateHeart />,
		name: 'donate',
	},
	{
		to: '/about',
		icon: <BsLightbulb />,
		name: 'about',
	},
	{
		to: '/settings',
		icon: <FiSettings />,
		name: 'settings',
	},
];

export { links };
