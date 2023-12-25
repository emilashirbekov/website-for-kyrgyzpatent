module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			backgroundColor: {
				primary: '#fff',
				secondary: '#F4F7FE',
				tertiary: '#4318FF',
				blue: '#2B3674',
			},
			textColor: {
				primary: '#fff',
				gray: '#A3AED0',
				tertiary: '#4318FF',
				blue: '#2B3674',
			},
		},
	},
	plugins: [],
}
