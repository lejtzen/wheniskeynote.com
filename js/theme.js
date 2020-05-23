(function(el) {
  window.theme = {
    colors: ['light', 'dark'],

    default: 'dark',

    set color (color) {
      var theme = this.colors.indexOf(color) > -1 ? color : this.default;

      el.dataset.theme = theme;
      window.localStorage.setItem('theme', theme);
    },

    get color () {
      return el.dataset.theme;
    },

    toggle: function () {
      this.color = this.color === 'dark' ? 'light' : 'dark';
    },
  };

  theme.color = window.localStorage.getItem('theme');
})(document.documentElement);
