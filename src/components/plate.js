export default function(imageSrc, _name, _description) {
	const img = document.createElement("img");
	img.src = imageSrc;
	const name = document.createElement("h3");
	name.textContent = _name;
	const description = document.createElement("p");
	description.textContent = _description;
	const container = document.createElement("div");
	container.classList.add("plate");
	container.appendChild(img);
	container.appendChild(name);
	container.appendChild(description);
	return container;
}