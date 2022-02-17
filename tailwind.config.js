module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      keyframes: {
        fade: {
          from: {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        slide: {
          from: {
            transform: 'translateY(100%)',
          },
          to: {
            transform: 'translateY(0%)',
          },
        },
      },
      animation: {
        fade: 'fade 1000ms ease-out 1000ms backwards',
        slide: 'slide 400ms ease-out',
      },
    },
  },
  plugins: [],
}
