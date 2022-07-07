import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { About, Donate, Expense, Home, Notes, Shopping, Todo } from './../pages';

export const Router = ({ weather, setWeather, city, setCity, error, setError }) => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Home
						weather={weather}
						setWeather={setWeather}
						city={city}
						setCity={setCity}
						error={error}
						setError={setError}
					/>
				}
			/>
			<Route path='/todo' element={<Todo />} />
			<Route path='/expense' element={<Expense />} />
			<Route path='/shopping' element={<Shopping />} />
			<Route path='/notes' element={<Notes />} />
			<Route path='/donate' element={<Donate />} />
			<Route path='/about' element={<About />} />
		</Routes>
	);
};
