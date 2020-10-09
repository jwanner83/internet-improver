import config from './config'
import storage from './storage'
import * as stage  from './stage'

(async function () {
  const views = await storage.get(config.STORAGE_KEYWORD) || 0
  await storage.set(config.STORAGE_KEYWORD, views + 1)

  stage.init(views)
})()