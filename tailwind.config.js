/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            inter: ['Inter', 'sans-serif'],
         },
         colors: {
            'primary-color': 'var(--primary-color)',
            'secondary-color': 'var(--secondary-color)',
            'alpha-color': 'var(--alpha-color)',
            'purple-color': 'var(--purple-color)',
            'border-color': 'var(--border-color)',
            'header-color': 'var(--header-color)',
            'sidebar-color': 'var(--sidebar-color)',
            'sidebar-popup-color': 'var(--sidebar-popup-color)',
            'playingbar-color': 'var(--playingbar-color)',
         },
         textColor: {
            'search-color': 'var(--search-color)',
            'navigation-color': 'var(--navigation-color)',
         },
         boxShadow: {
            header: '0 3px 5px var(--header-shadow-color)',
         },
         spacing: {
            header: '70px',
            playingbar: '90px',
            sidebar: '240px',
         },
         padding: {
            section: '60px',
         },
      },
   },
   plugins: [],
};
