// Creating a the theme interface
class Theme {
	name: string;
	background: string;
	error: string;
	accent: string;
	subAccent: string;
	text: string;
	subText: string;

	constructor(theme: tempTheme) {
		this.name = theme.name;
		this.background = theme.background;
		this.error = theme.error;
		this.accent = theme.accent;
		this.subAccent = theme.subAccent;
		this.text = theme.text;
		this.subText = theme.subText;
	}
}

const themeJson: tempTheme[] = require('./../styles.json');

var themes: Theme[] = [];	

themeJson.map(theme => themes.push(new Theme(theme)))

interface tempTheme {
	name: string;
	background: string;
	error: string;
	accent: string;
	subAccent: string;
	text: string;
	subText: string;
}

export { Theme, themes };
