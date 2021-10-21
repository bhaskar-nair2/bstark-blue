module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#00ADB5',
      text: '#EEEEEE',
      background: '#222831',
      accent: '#393E46',
    },
    fontSize: {
      xs: ['10px', '12px'],
      sm: ['14px', '20px'],
      base: ['18px', '21.78px'],
      lg: ['24px', '28px'],
      xl: ['36px', '32px'],
      '2xl':['48px', '58.09px'],
      '3xl':['64px', '77.45px']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
