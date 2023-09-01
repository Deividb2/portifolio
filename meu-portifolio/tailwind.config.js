/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        'cabecalho_h': '40vh',
        '70vh': '70vh',
        '40vw': '40vw'
      },
      fontFamily: {
        // principal: ['Inter', 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      colors: {
        'cor1': {
          1: '#1fb6ff'
        },
        'fundoMenu': 'rgba(0,0,0, 0.5)',
        'vermelho': '#f5024f',
        'cinza': '#707070',
        'cor3': '#ff49db',
        'cor4': '#ff7849',
        'cor5': '#13ce66',
        'cor6': '#ffc82c',
        'cor7': '#273444',
        'cor8': '#8492a6',
        'cor9': '#d3dce6',
      },
      backgroundImage: {
        'fundo': 'url(src/assets/imgs/fundo.webp)',
        'perfil1': 'url(src/assets/imgs/perfil1.jpg)',
        'perfil2': 'url(src/assets/imgs/perfil2.jpg)',
        'html': 'url(src/assets/imgs/html.png)',
        'css': 'url(src/assets/imgs/css.png)',
        'js': 'url(src/assets/imgs/js.png)',
        'react': 'url(src/assets/imgs/react.png)',
        'tailwind': 'url(src/assets/imgs/tailwind.png)',
        'academia': 'url(src/assets/imgs/fitness_gym.png)',
        'barbearia': 'url(src/assets/imgs/barbearia.png)',
      }
    },
  },
  plugins: [],
}

