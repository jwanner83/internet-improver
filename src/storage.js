export default {
  set: async (key, value) => {
    await browser.storage.local.set({ [key]: value })
  },
  get: async (key = undefined) => {
    const content = await browser.storage.local.get()
    return key ? content[key] : content
  }
}