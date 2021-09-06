export default class Stagger {
  constructor(node) {
    this.node = node

    console.log(this)
  }
}

const stagger = function (str) {
  return String(str)
    .split(' ')
    .map(function (word, index) {
      return (
        '<span class="stagger-wrapper"><span class="stagger" style="animation-delay: ' +
        (index + 1) * 50 +
        'ms;">' +
        word +
        '</span></span>'
      )
    })
    .join(' ')
}
