/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				oswald: "Oswald",
				bench: "BenchNine",
				khand: ['Khand-Regular', "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				victor: '"Victor Mono", monospace',
				victoritalic: ["Victor Mono Italic", "monospace"],
			},
			screens: {
				xs: "320px"
			}
		},
	},
	plugins: [],
}
