import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider as ThemeContext } from './contexts/ThemeContext';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<ThemeContext>
				<App />
		</ThemeContext>
	</BrowserRouter>
);
