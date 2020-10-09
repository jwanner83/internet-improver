export default Object.freeze({
  /**
   * Define how fast the user should notice
   * The lower the number the longer the plugin stays
   * hidden
   */
  FACTOR: 40,

  /** The local storage keyword */
  STORAGE_KEYWORD: 'views',

  /**
   * The source of the images
   *
   * Define `%w` for width and `%h` for height which will be
   * replaced with the width and height of the image
   */
  IMAGE_PROVIDER: 'https://placebear.com/%w/%h'
})