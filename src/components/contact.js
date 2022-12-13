export default function() {
	const container = document.createElement("div");
	container.id = "contact";
	const address = document.createElement("p");
	address.textContent = "📍 8060 East Addison St. Conway, SC 29526";
	const phoneNumber = document.createElement("p");
	phoneNumber.textContent = "☎️ 843-365-2776";
	const email = document.createElement("p");
	email.textContent = "📧 contact@meatrestaurant.com";
	container.appendChild(address);
	container.appendChild(phoneNumber);
	container.appendChild(email);
	return container;
}