import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	// Esta configuración obliga a Vite a tratar los .js como .jsx
	plugins: [
		react({
			include: /\.(js|jsx|ts|tsx)$/,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	esbuild: {
		loader: 'jsx',
		include: /src\/.*\.js$/, // Aplica el cargador de JSX a todos los .js en /src
		exclude: [],
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
	server: {
		host: true,
		port: 3000,
	},
});
