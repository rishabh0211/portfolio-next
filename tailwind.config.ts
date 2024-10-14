import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				background_light: 'hsl(var(--background-light))',
				background_dark: 'hsl(var(--background-dark))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontSize: {
				'2xs': '0.65rem',
			},
			boxShadow: {
				menu: ' -1rem 1rem 3rem rgba(0, 0, 0, 0.8)',
			},
			animation: {
				line1: 'line1 .3s ease-in-out forwards',
				line2: 'line2 .3s ease-in-out forwards',
				line3: 'line3 .3s ease-in-out forwards',
				line1Back: 'line1Back .3s ease-in-out forwards',
				line2Back: 'line2Back .3s ease-in-out forwards',
				line3Back: 'line3Back .3s ease-in-out forwards',
			},
			keyframes: {
				line1: {
					'0%': {
						transform: 'translate(0, 0) rotate(0deg)',
					},
					'50%': {
						transform: 'translate(0, 0.75rem) rotate(0deg)',
					},
					'100%': {
						transform: 'translate(0, 0.75rem) rotate(45deg)',
					},
				},
				line2: {
					'0%': {
						transform: 'scale(1)',
						opacity: '1',
					},
					'100%': {
						transform: 'scale(0)',
						opacity: '0',
					},
				},
				line3: {
					'0%': {
						transform: 'translate(0, 0) rotate(0deg)',
					},
					'50%': {
						transform: 'translate(0, -0.75rem) rotate(0deg)',
					},
					'100%': {
						transform: 'translate(0, -0.75rem) rotate(135deg)',
					},
				},
				line1Back: {
					'0%': {
						transform: 'translate(0, 0.75rem) rotate(45deg)',
					},
					'50%': {
						transform: 'translate(0, 0.75rem) rotate(0deg)',
					},
					'100%': {
						transform: 'translate(0, 0) rotate(0)',
					},
				},
				line2Back: {
					'0%': {
						transform: 'scale(0)',
						opacity: '0',
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1',
					},
				},
				line3Back: {
					'0%': {
						transform: 'translate(0, -0.75rem) rotate(135deg)',
					},
					'50%': {
						transform: 'translate(0, -0.75rem) rotate(0deg)',
					},
					'100%': {
						transform: 'translate(0, 0) rotate(0deg)',
					},
				},
			},
		},
	},
	darkMode: ['class'],
	plugins: [require('tailwindcss-animate')],
};
export default config;
