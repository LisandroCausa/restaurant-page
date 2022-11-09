import './style.css';
import navBar from './components/navBar.js';
import mainTitle from './components/mainTitle.js';

const contentDiv = (function(){
	const div = document.createElement("div");
	div.id = "content";
	return div;
})();

document.body.appendChild(contentDiv);
contentDiv.appendChild(navBar());
contentDiv.appendChild(mainTitle());