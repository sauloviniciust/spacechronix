/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        light: '#f5f5f5',
        dark: '#0e0e0e',
        darker: '#000',
        'laranja': '#ee3c1c',
        'dourado': {
          100: '#dcd0b4',
          200: '#faf4e6',
          300: '#574a34',
        },
        'azul': {
          100: '#c4e2f9',
          200: '#4496d5',
          300: '#1f304a',
        },
        'roxo': {
          100: '#d0b3f1',
          200: '#8563d6',
          300: '#342064',
        },
        'vermelho': {
          100: '#f83538',
          200: '#8d1f1d',
          300: '#410a09',
        },
        'verde': {
          100: '#97dd71',
          200: '#698c56',
          300: '#244623',
        },

        'laranjado':{
          100: '#f79610',
          200: '#f76c0f',
          300: '#f83c0e',
        },
        'greeen': {
          100: '#1f941f',
        }
    
      }
    },
  },
  plugins: [],
}

