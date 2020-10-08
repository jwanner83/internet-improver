import config from './config.js'

export default {
  10: () => {
    init(1)
  },
  20: () => {
    init(1)
  },
  30: () => {
    init(5)
  },
  40: () => {
    init(10)
  },
  50: () => {
    init(10)
  },
  60: () => {
    init(10)
  },
  70: () => {
    init(15)
  },
  80: () => {
    init(20)
  },
  90: () => {
    init(25)
  },
  100: () => {
    init(30)
  },
  110: () => {
    init(30)
  },
  120: () => {
    init(35)
  },
  130: () => {
    init(40)
  },
  140: () => {
    init(50)
  },
  150: () => {
    init(60)
  },
  160: () => {
    init(70)
  },
  170: () => {
    init(80)
  },
  180: () => {
    init(90)
  },
  190: () => {
    init(100)
  },
  200: () => {
    init(100)
  },
  default: () => {
    init(100)
  }
}

function init (percentage) {
  let array = shuffle(Array.from(document.querySelectorAll('img')))
  let amount = Math.ceil((array.length / 100 * percentage))
  array.slice(-1 * amount).forEach(replace)
}

function replace (element) {
  const height = element.clientHeight
  const width = element.clientWidth

  let url = config.imageProvider
  url = url.replace('%h', height)
  url = url.replace('%w', width)

  element.setAttribute('src', url)
}

function shuffle (a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}