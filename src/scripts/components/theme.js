class Theme {
  constructor(node) {
    this.node = node

    this.listenForChange()
  }

  themes = ['system', 'light', 'dark']

  default = this.themes[0]

  listenForChange() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    darkModeMediaQuery.addListener((e) => {
      const darkModeOn = e.matches
      console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`)
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

export default Theme
