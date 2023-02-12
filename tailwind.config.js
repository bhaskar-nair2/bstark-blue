module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#00ADB5',
      text: '#EEEEEE',
      background: '#222831',
      accent: '#393E46',
      danger: '#FF0000'
    },
    fontSize: {
      xs: ['12px', '12px'],
      sm: ['14px', '20px'],
      md: ['16px', '20px'],
      base: ['18px', '21.78px'],
      lg: ['24px', '28px'],
      xl: ['36px', '32px'],
      '2xl': ['48px', '58.09px'],
      '3xl': ['64px', '77.45px']
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
