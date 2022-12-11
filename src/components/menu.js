import plate from "./plate";
import plateImage1 from './../img/plate1.jpg';
import plateImage2 from './../img/plate2.jpg';
import plateImage3 from './../img/plate3.jpg';
import plateImage4 from './../img/plate4.jpg';
import plateImage5 from './../img/plate5.jpg';
import plateImage6 from './../img/plate6.jpg';


export default function() {
	const container = document.createElement("div");
	container.id = "menu";

	const platesInfo = [
		[plateImage1, "plate 1", "Lorem ipsum dolor sit amet consectetur adipiscing elit sed conubia, tempor aenean semper pretium fames viverra vel nisi"],
		[plateImage2, "plate 2", "Cursus torquent gravida suspendisse orci volutpat pulvinar curae. Potenti blandit habitasse sociosqu mollis nisi vel risus nec libero"],
		[plateImage3, "plate 3", "Conubia interdum enim duis velit suscipit platea fames dictum, volutpat semper scelerisque diam etiam vehicula ligula dis"],
		[plateImage4, "plate 4", "Phasellus cras ornare taciti elementum himenaeos turpis interdum lectus, enim gravida mattis dictumst eros massa et, id magnis quam tristique ac justo cursus"],
		[plateImage5, "plate 5", "Arcu ad orci primis scelerisque tempor ornare nullam, sodales sed erat cursus ultrices praesent, eleifend cras porttitor iaculis enim aenean. Lobortis massa lectus ad quis platea fames varius morbi eu arcu eros congue vivamus sagittis imperdiet"],
		[plateImage6, "plate 6", "Metus id odio class felis facilisi himenaeos eget venenatis duis ultricies cursus ornare. Facilisis at lectus dui justo fames, cubilia nisi purus enim malesuada, potenti congue elementum maecenas"],
	];
	platesInfo.forEach(element => {
		container.appendChild(plate(element[0], element[1], element[2]));
	});
	return container;
}