import './style.css';
import navBar from './components/navBar.js';
import mainTitle from './components/mainTitle.js';

function content() {
	const div = document.createElement("div");
	div.id = "content";
	return div;
}

const header = (function(){
	const hd = document.createElement("header");
	hd.appendChild(navBar());
	return hd;
})();


document.body.appendChild(header);

const contentDiv = content();
document.body.appendChild(contentDiv);
contentDiv.appendChild(mainTitle());