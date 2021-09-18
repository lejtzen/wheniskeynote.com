const THEMES = ['light', 'dark']
const SELECTEDTHEME = 'dark'
const MEDIAQUERY = '(prefers-color-scheme: dark)'
const KEY = 'theme'

const getTheme = () => {
  return window.localStorage.getItem(KEY)
}

const getSystemTheme = () => {
  const query = window.matchMedia(MEDIAQUERY)

  return query.matches ? 'dark' : 'light'
}

const getResolvedTheme = () => {
  if (SELECTEDTHEME === 'system') {
    return getSystemTheme()
  }

  return SELECTEDTHEME
}

const setTheme = (theme) => {
  // Check if themes is valid

  // Store in localstorage
  try {
    localStorage.setItem(KEY, theme)
  } catch (e) {
    // Unsupported
  }

  // Resolve theme

  // Set HTML class
  document.documentElement.classList.remove(...THEMES)
  document.documentElement.classList.add(theme)

  // Call callbacks
}

const handleMediaQuery = (event) => {
  if (SELECTEDTHEME !== 'system') {
    return
  }

  setTheme(getSystemTheme())
}

window.matchMedia(MEDIAQUERY).addListener(handleMediaQuery)
// window.matchMedia(MEDIAQUERY).removeListener(handleMediaQuery)

export const setDefaultTheme = () => {
  try {
    const d = document.documentElement.classList
    const storedTheme = localStorage.getItem('theme')

    d.remove('light', 'dark')

    if (storedTheme === 'system') {
      var t = '(prefers-color-scheme: dark)'
      var m = window.matchMedia(t)

      if (m.matches) {
        d.add('dark')
      } else {
        d.add('light')
      }
    } else if (['light', 'dark'].includes(storedTheme)) {
      d.add(storedTheme)
    } else {
      d.add('dark')
    }
  } catch (e) {}
}
