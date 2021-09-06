module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
