import { parseRequestUrl } from './utils';
import HomeScreen from './screens/HomeScreen';
import NosotrosScreen from './screens/NosotrosScreen';
import ContactoScreen from './screens/ContactoScreen';
import ArtesaniasScreen from './screens/ArtesaniasScreen';
import BlogScreen from './screens/BlogScreen';

import Header from './components/Header';
import Footer from './components/Footer';

import Error404Screen from './screens/Error404Screen';

// Styles
import './styles/normalize.css';
import './styles/main.css';

const routes = {
	'/': HomeScreen,
	'/nosotros': NosotrosScreen,
	'/contacto': ContactoScreen,
	'/artesanias': ArtesaniasScreen,
	'/blog': BlogScreen,
};

const router = () => {
	const request = parseRequestUrl();
	const parseUrl =
		(request.resource ? `/${request.resource}` : '/') +
		(request.id ? '/:id' : '') +
		(request.verb ? `/${request.verb}` : '');

	const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
	const main = document.getElementById('main-container');
	const header = document.getElementById('header-container');
	const footer = document.getElementById('footer-container');

	header.innerHTML = Header.render();
	if (Header.after_render) Header.after_render();

	footer.innerHTML = Footer.render();
	if (Footer.after_render) Footer.after_render();

	main.innerHTML = screen.render();
	if (screen.after_render) screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
