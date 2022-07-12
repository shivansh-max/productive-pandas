// creating a link theme
export class link {
	to: string;
	icon: JSX.Element;
	name: string;

	constructor(toP: string, iconP: JSX.Element, nameP: string) {
		this.to = toP;
		this.icon = iconP;
		this.name = nameP;
	}
}
