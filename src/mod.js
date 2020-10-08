import config from './config'
import stages from './stages'
import storage from './storage'

(async function () {
  let views = await storage.get(config.storageKeyword) || 0
  await increment(views)

  stageHandler(ceil(views))
})()

async function increment (before) {
  await storage.set({ [config.storageKeyword]: before + 1 })
}

function ceil (number) {
  return Math.ceil(number / 10) * 10
}

function stageHandler (stage) {
  if (typeof stages[stage] === 'function') {
    stages[stage]()
  } else {
    stages.default()
  }
}
