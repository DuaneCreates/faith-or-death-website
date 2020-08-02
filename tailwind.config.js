/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      yellow: '#CBC9A0',
      green: '#6A8768',
      black: '#000',
      white: '#fff'
    },
    fontFamily: {
      heading: ['Lora', 'serif'],
      body: ['Merriweather', 'serif'],
      'back-quote': ['Roboto', 'sans-serif']
    },
    extend: {
      fontSize: {
        'back-quote-small': '9.5rem'
      },
      spacing: {
        50: '12.5rem',
        175: '43.75rem'
      },
      opacity: {
        10: '.1'
      },
      screens: {
        xs: '420px'
      },
      maxWidth: {
        1080: '1920px'
      }
    }
  },
  variants: {},
  plugins: []
}
