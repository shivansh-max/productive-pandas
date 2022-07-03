import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { About, Donate, Expense, Home, Notes, Shopping, Todo } from './pages';
import { Global } from './styles/global';

export const App = () => {

	return (
		<>
			<Navbar />
			<Global />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/todo' element={<Todo />} />
				<Route path='/expense' element={<Expense />} />
				<Route path='/shopping' element={<Shopping />} />
				<Route path='/notes' element={<Notes />} />
				<Route path='/donate' element={<Donate />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	);
};

// Weather background images Alec Kim
