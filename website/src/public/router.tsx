// Imports
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './../pages/';

// Props interface
interface RouterProps {}

// main router
export const Router: FC<RouterProps> = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	);
};
