/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';
import themes from 'daisyui/src/theming/themes';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	screens: {
		print: { raw: 'print' },
		screen: { raw: 'screen' }
	},
	darkMode: ['class', '[data-theme="forest"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito sans', ...fontFamily.sans]
			},
			colors: {
				primary: 'hsl(var(--p) / 1)',
				secondary: 'hsl(var(--s) / 1)'
			},
			spacing: {
				prose: '65ch',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		darkTheme: 'forest',
		themes: [
			{
				cupcake: {
					...themes['[data-theme=cupcake]'],
					'--rounded-btn': '0.5rem',
					'--btn-text-case': 'normal'
				}
			},
			{
				forest: {
					...themes['[data-theme=forest]'],
					'--rounded-btn': '0.5rem',
					'--btn-text-case': 'normal'
				}
			}
		]
	}
};
