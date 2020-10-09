import config from './config.js'

export function init (views) {
  let array = shuffle(Array.from(document.querySelectorAll('img')))

  const percentage = ((views / 100) * (config.FACTOR / 50)) * (config.FACTOR / 10)
  let amount = percentage < 5 ? 0 : Math.ceil((array.length / 100 * percentage))

  array.slice(-1 * amount).forEach(replace)
}

function replace (element) {
  const height = element.clientHeight
  const width = element.clientWidth

  let url = config.IMAGE_PROVIDER
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