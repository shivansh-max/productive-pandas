// Imports
import { createContext, FC } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Theme } from '../models/';

// Creating a theme interface to define what you get
interface themeContext {
	theme: Theme;
	setTheme: (newTheme: Theme) => void;
}

// creating a dummy sample ( will eventually import form local storage )
const sampleThemeContext: Theme = new Theme({
	name: 'hipyo',
	background: '#2C3745',
	error: '#ffccff',
	accent: '#66ffff',
	subAccent: '#cc99ff',
	text: '#ffff9c',
	subText: '#ffffe6',
});

// Creating the context
const ThemeContext = createContext<themeContext>({
	theme: sampleThemeContext,
	setTheme: (theme) => console.log(theme),
});

// Creating a interface that defines the props
interface themeProps {
	children: JSX.Element[] | JSX.Element;
}

// Creating the theme provider that will wrap the rest of the app
const ThemeProvider: FC<themeProps> = ({ children }) => {
	const [theme, setTheme] = useLocalStorage<Theme>(
		'theme',
		sampleThemeContext
	);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Exporting the provider / Theme Context
export { ThemeProvider, ThemeContext };
