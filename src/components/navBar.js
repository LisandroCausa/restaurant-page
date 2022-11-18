export default function() {
	const nav = document.createElement("nav");
	nav.id = "navbar";
	const list = document.createElement("ul");

	const home = navOption("Home");
	const menu = navOption("Menu");
	const contact = navOption("Contact");

	list.appendChild(home);
	list.appendChild(menu);
	list.appendChild(contact);

	const options = list.childNodes;
	options.forEach(element => {
		element.addEventListener("click", () => {
			removeClassFromChilds(list, "selected");
			element.classList.add("selected");
		});
	});

	nav.appendChild(list);
	return nav;
}

function removeClassFromChilds(parent, className) {
	parent.childNodes.forEach(element => {
		element.classList.remove(className);
	});
}

function navOption(text) {
	const li = document.createElement("li");
	li.textContent = text;
	return li;
}