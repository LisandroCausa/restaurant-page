import plate from "./plate";
import plateImage1 from './../img/plate1.jpg';

export default function() {
	const container = document.createElement("div");
	container.id = "menu";

	const platesInfo = [
		[plateImage1, "plate 1", "some description"]
	];
	platesInfo.forEach(element => {
		container.appendChild(plate(element[0], element[1], element[2]));
	});
	return container;
}