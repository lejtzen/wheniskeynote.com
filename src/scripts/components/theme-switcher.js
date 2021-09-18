export default class ThemeSwitcher {
  constructor(node) {
    this.node = node

    window.matchMedia(MEDIAQUERY).addListener((e) => {
      this.setTheme(e.matches ? 'dark' : 'light')
    })
  }

  setTheme(color) {
    const theme = this.themes.includes(color) ? color : this.default

    this.node.classList.remove(...this.themes)
    this.node.classList.add(theme)
    window.localStorage.setItem('theme', theme)
  }

  getTheme() {
    return window.localStorage.getItem('theme')
  }
}

export function setDefaultTheme() {
  const storedTheme = window.localStorage.getItem('theme')
  const prefferedTheme = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).macthes

  document.documentElement.classList.add(
    storedTheme ? storedTheme : prefferedTheme,
  )
}
