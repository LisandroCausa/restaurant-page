import mainTitle from "./mainTitle";

export default function() {
	const nav = document.createElement("nav");
	nav.id = "navbar";
	const list = document.createElement("ul");

	const home = navOption("Home");
	home.classList.add("selected");
	const menu = navOption("Menu");
	const contact = navOption("Contact");

	home.addEventListener("click", () => {
		if(home.classList.contains("selected") == false)
		{
			const contentDiv = document.getElementById("content");
			emptyDOMElement(contentDiv);
			contentDiv.appendChild(mainTitle());
		}
	});

	menu.addEventListener("click", () => {
		if(menu.classList.contains("selected") == false)
		{
			const contentDiv = document.getElementById("content");
			emptyDOMElement(contentDiv);
			contentDiv.appendChild(document.createElement("h1"));
		}
	});

	contact.addEventListener("click", () => {
		if(contact.classList.contains("selected") == false)
		{
			const contentDiv = document.getElementById("content");
			emptyDOMElement(contentDiv);
			contentDiv.appendChild(document.createElement("p"));
		}
	});

	list.appendChild(home);
	list.appendChild(menu);
	list.appendChild(contact);

	const options = list.childNodes;
	options.forEach(element => {
		element.addEventListener("click", () => {
			if(element.classList.contains("selected") == false)
			{
				removeClassFromChilds(list, "selected");
				element.classList.add("selected");
			}
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

function emptyDOMElement(element) {
	while (element.firstChild) {
		element.removeChild(element.lastChild);
	}
}