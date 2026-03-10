import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * INYECCIÓN DE FUENTES Y ESTILOS GLOBALES
 */
const setupLuxuryEnvironment = () => {
	// Asegura que las fuentes estén presentes si el import de CSS falla
	if (!document.getElementById('luxury-fonts')) {
		const link = document.createElement('link');
		link.id = 'luxury-fonts';
		link.rel = 'stylesheet';
		link.href =
			'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;1,600&display=swap';
		document.head.appendChild(link);
	}

	// Restauración de scroll manual para una carga más suave
	if ('scrollRestoration' in window.history) {
		window.history.scrollRestoration = 'manual';
	}
};

setupLuxuryEnvironment();

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Luxury foundation missing: No root element found.');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
