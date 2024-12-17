import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	define: {
		// Pass environment variables to the client if needed
		'process.env': {
		  RCON_PASSWORD: process.env.RCON_PASSWORD,
		  RCON_HOST: process.env.RCON_HOST,
		  RCON_PORT: process.env.RCON_PORT,
		},
	},
});