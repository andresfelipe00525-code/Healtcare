/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx}', // Aquí le decimos que busque en tus .js
	],
	theme: {
		extend: {
			colors: {
				'lux-navy': '#0f172a',
				'lux-gold': '#b89c72',
			},
		},
	},
	plugins: [],
};
