const simple = document.querySelector('#projects').children[0];
const js = document.querySelector('#projects').children[1];
const node = document.querySelector('#projects').children[2];
const react = document.querySelector('#projects').children[3];
const projects = document.querySelector('#projects-section');
const loading = () => {
	document.querySelector('body').classList.add('bg');
	document.querySelector('body').classList.remove('bg-info');
	const loadingElements = document.querySelectorAll('.hide');
	loadingElements[0].classList.add('d-none');
	loadingElements[0].classList.remove('d-flex'); 
	const mainContent = document.querySelectorAll('.content'); 
	mainContent[0].classList.remove('d-none');
	mainContent[1].classList.remove('d-none');
	mainContent[2].classList.remove('d-none');
	mainContent[3].classList.remove('d-none');
	mainContent[4].classList.remove('d-none');
}
const simplebutton = (e) => {
	projects.children[3].classList.remove('d-none');
	projects.children[4].classList.add('d-none');
	projects.children[5].classList.add('d-none');
	projects.children[6].classList.add('d-none');
	simple.classList.add('active');
	js.classList.remove('active');
	node.classList.remove('active');
	react.classList.remove('active');
	e.preventDefault();
}
const jsbutton = (e) => {
	projects.children[3].classList.add('d-none');
	projects.children[4].classList.remove('d-none');
	projects.children[5].classList.add('d-none');
	projects.children[6].classList.add('d-none');
	js.classList.add('active');
	node.classList.remove('active');
	simple.classList.remove('active');
	react.classList.remove('active');
	e.preventDefault();
}
const nodebutton = (e) => {
	projects.children[3].classList.add('d-none');
	projects.children[4].classList.add('d-none');
	projects.children[5].classList.remove('d-none');
	projects.children[6].classList.add('d-none');
	node.classList.add('active');
	simple.classList.remove('active');
	js.classList.remove('active');
	react.classList.remove('active');
	e.preventDefault();
}
const reactbutton = (e) => {
	projects.children[3].classList.add('d-none');
	projects.children[4].classList.add('d-none');
	projects.children[5].classList.add('d-none');
	projects.children[6].classList.remove('d-none');
	node.classList.remove('active');
	simple.classList.remove('active');
	js.classList.remove('active');
	react.classList.add('active');
	e.preventDefault();
}
const simpleEvents = () => {
	const simpleWeb = projects.children[3];
	simpleWeb.children[0].addEventListener('click', () => {
		window.open('https://talal02.github.io/BootStrap_1/index.html', '_black');
	});
	simpleWeb.children[1].addEventListener('click', () => {
		window.open('https://talal02.github.io/BootStrap_2/index.html', '_black');
	});
	simpleWeb.children[2].addEventListener('click', () => {
		window.open('https://talal02.github.io/BootStrap_3/index.html', '_black');
	});
	simpleWeb.children[3].addEventListener('click', () => {
		window.open('https://talal02.github.io/BootStrap_4/index.html', '_black');
	});
}
const jsEvents = () => {
	const jsWeb = projects.children[4];
	jsWeb.children[0].addEventListener('click', () => {
		window.open('https://talal02.github.io/JavaScript_Todo/index.html', '_black');
	});
	jsWeb.children[1].addEventListener('click', () => {
		window.open('https://talal02.github.io/CanYouType/index.html', '_black');
	});
	jsWeb.children[2].addEventListener('click', () => {
		window.open('https://talal02.github.io/JavaScript_githubUserFinder/index.html', '_black');
	});
	jsWeb.children[3].addEventListener('click', () => {
		window.open('https://talal02.github.io/JavaScript_RGBColorGame/index.html', '_black');
	});
	jsWeb.children[4].addEventListener('click', () => {
		window.open('https://talal02.github.io/trackCalorie/index.html', '_black');
	});
	jsWeb.children[5].addEventListener('click', () => {
		window.open('https://talal02.github.io/JavaScript_Library/index.html', '_black');
	});
	jsWeb.children[6].addEventListener('click', () => {
		window.open('https://talal02.github.io/JavaScript_Calculator/index.html', '_black');
	});
	jsWeb.children[7].addEventListener('click', () => {
		window.open('https://talal02.github.io/JavaScript_Color/index.html', '_black');
	});
	jsWeb.children[8].addEventListener('click', () => {
		window.open('https://talal02.github.io/JavaScript_LoanCalculator/index.html', '_black');
	});
}
const nodeEvents = () => {
	const nodeWeb = projects.children[5];
	nodeWeb.children[0].addEventListener('click', () => {
		window.open('https://github.com/talal02/notesapp', '_blank');
	});
	nodeWeb.children[1].addEventListener('click', () => {
		window.open('https://talal-weather-app.herokuapp.com/', '_blank');
	});
	nodeWeb.children[2].addEventListener('click', () => {
		window.open('https://talal-task-api.herokuapp.com/', '_blank');
	});
}
const reactEvents = () => {
	const reactWeb = projects.children[6];
	reactWeb.children[0].addEventListener('click', () => {
		window.open('https://burger-builder-a9536.web.app/', '_blank');
	});
	reactWeb.children[1].addEventListener('click', () => {
		window.open('https://covid-19-tracker-talal02.web.app', '_blank');
	});
}
const portfolio = () => {
	setTimeout(loading, 6000);
	simple.addEventListener('click', simplebutton);
	js.addEventListener('click', jsbutton);
	node.addEventListener('click', nodebutton);
	react.addEventListener('click', reactbutton);
	simpleEvents();
	jsEvents();
	nodeEvents();
	reactEvents();
}
portfolio();
