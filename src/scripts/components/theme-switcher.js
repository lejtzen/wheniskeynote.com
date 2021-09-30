import { getTheme, setTheme, onTheme } from '~/src/scripts/services/theme.js'

export default class ThemeSwitcher {
  constructor(node) {
    this.node = node

    this.node.addEventListener('change', (event) => {
      setTheme(event.target.value)
    })

    onTheme('change', (theme) => {
      this.node.value = theme
    })

    this.node.value = getTheme()
  }
}
