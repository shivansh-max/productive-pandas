import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { ThemeProvider } from './contexts/theme';
import { TimeProvider } from './contexts/time';
import { WeatherProvider } from './contexts/weather';

// Pulling the root element where all of my components will render under
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// rendering my components
// Browser Router is for all of the routes
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<WeatherProvider>
					<TimeProvider>
						<App />
					</TimeProvider>
				</WeatherProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
