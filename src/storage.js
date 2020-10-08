export default {
  set: async (object) => {
    await browser.storage.local.set(object)
  },
  get: async (key = undefined) => {
    const content = await browser.storage.local.get()
    return key ? content[key] : content
  }
}