import { GrUnorderedList, GrDocumentNotes } from 'react-icons/gr';
import { AiOutlineDollar } from 'react-icons/ai';
import { RiShoppingBag2F } from 'react-icons/ri';
import { BiDonateHeart } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const links = [
	{ to: '/todo', icon: GrUnorderedList, name: 'todo' },
	{ to: '/expenses', icon: AiOutlineDollar, name: 'expenses' },
	{ to: '/shopping', icon: RiShoppingBag2F, name: 'shopping' },
	{ to: '/notes', icon: GrDocumentNotes, name: 'notes' },
	{ to: '/donate', icon: BiDonateHeart, name: 'donate' },
	{ to: '/about', icon: BiDonateHeart, name: 'about' },
	{ to: '/settings', icon: FiSettings, name: 'settings' },
];

export { links };
