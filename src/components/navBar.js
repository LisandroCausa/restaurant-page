export default function() {
	const nav = document.createElement("ul");

	const home = navOption("Home");
	const menu = navOption("Menu");
	const contact = navOption("Contact");

	nav.appendChild(home);
	nav.appendChild(menu);
	nav.appendChild(contact);
	return nav;
}

function navOption(text) {
	const li = document.createElement("li");
	li.textContent = text;
	return li;
}