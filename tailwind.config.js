/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			Raleway: ['Raleway', 'sans-serif'],
  			Playfair: ['Playfair Display', 'sans-serif']
  		},
  		colors: {
  			tony_BG: {
  				'100': '#212529',
  				'200': '#272D32'
  			},
  			tony_text: {
  				'100': '#F8F9FA',
  				'200': '#DEE2E6',
  				'300': '#ADB5BD'
  			},
  			tony_stroke: {
  				'100': '#343A40',
  				'200': '#495057',
  				'300': '#6C757D'
  			},
  			tony_accent: {
  				'100': '#00EFA6'
  			}
		}		
  	}
  },
  plugins: [require("tailwindcss-animate")],
}