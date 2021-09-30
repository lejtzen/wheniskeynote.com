const THEMES = ['system', 'light', 'dark']
const MEDIAQUERY = '(prefers-color-scheme: dark)'
const KEY = 'theme'
const CALLBACKS = {}

let selectedTheme = 'system'

function callCallbacks(key, data = null) {
  const callbacks = CALLBACKS[key] || []

  callbacks.forEach((callback) => {
    callback(data)
  })
}

function getSystemTheme() {
  const query = window.matchMedia(MEDIAQUERY)

  return query.matches ? 'dark' : 'light'
}

export function getTheme() {
  return selectedTheme
}

function getResolvedTheme() {
  const theme = getTheme()

  if (theme === 'system') {
    return getSystemTheme()
  }

  return theme
}

export function setTheme(theme) {
  if (!THEMES.includes(theme)) {
    return
  }

  try {
    window.localStorage.setItem(KEY, theme)
  } catch (e) {}

  selectedTheme = theme
  document.documentElement.classList.remove(...THEMES)
  document.documentElement.classList.add(getResolvedTheme())

  callCallbacks('change', theme)
}

export function onTheme(key, callback) {
  CALLBACKS[key] = CALLBACKS[key] || []
  CALLBACKS[key].push(callback)
}

export function setDefaultTheme() {
  let theme = 'system'

  try {
    theme = window.localStorage.getItem(KEY)
  } catch (e) {}

  setTheme(theme)

  window.matchMedia(MEDIAQUERY).addListener(({ matches }) => {
    if (getTheme() === 'system') {
      setTheme('system')
    }
  })
}
