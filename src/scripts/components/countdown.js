export default class Countdown {
  constructor(node) {
    this.node = node

    console.log(this)
  }
}

function showRemaining() {
  let now = new Date(),
    distance = start - now

  if (distance < 0) {
    clearInterval(timer)
    document.getElementById('days').innerText = '0'
    document.getElementById('hours').innerText = '0'
    document.getElementById('minutes').innerText = '0'
    document.getElementById('seconds').innerText = '0'

    return
  }

  let days = Math.floor(distance / _day),
    hours = Math.floor((distance % _day) / _hour),
    minutes = Math.floor((distance % _hour) / _minute),
    seconds = Math.floor((distance % _minute) / _second)

  document.getElementById('days').innerText = days
  document.getElementById('hours').innerText = hours
  document.getElementById('minutes').innerText = minutes
  document.getElementById('seconds').innerText = seconds
}
