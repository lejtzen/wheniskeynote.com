const promiseWrap = (component) =>
  new Promise((resolve) => resolve({ default: component }))

const components = {
  countdown: import('./components/countdown.js'),
  invite: import('./components/invite.js'),
  stagger: import('./components/stagger.js'),
  theme: import('./components/theme.js'),
}

Array.from(document.querySelectorAll('[data-component]')).forEach((node) => {
  const name = node.dataset.component
  const component = components[name]

  if (component) {
    component.then(({ default: Component }) => {
      new Component(node)
    })
  } else {
    console.warn(`Component ${name} not available`)
  }
})
