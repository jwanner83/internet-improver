import config from './config.js'

export default {
  10: () => {
    init(1)
  },
  20: () => {
    init(1)
  },
  30: () => {
    init(2)
  },
  40: () => {
    init(3)
  },
  50: () => {
    init(3)
  },
  60: () => {
    init(3)
  },
  70: () => {
    init(4)
  },
  80: () => {
    init(4)
  },
  90: () => {
    init(5)
  },
  100: () => {
    init(6)
  },
  110: () => {
    init(7)
  },
  120: () => {
    init(8)
  },
  130: () => {
    init(10)
  },
  140: () => {
    init(12)
  },
  150: () => {
    init(14)
  },
  160: () => {
    init(16)
  },
  170: () => {
    init(18)
  },
  180: () => {
    init(20)
  },
  190: () => {
    init(20)
  },
  200: () => {
    init(-1)
  },
  default: () => {
    init(-1)
  }
}

function init (amount) {
  shuffle(Array.from(document.querySelectorAll('img'))).slice(-1 * amount).forEach(replace)
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