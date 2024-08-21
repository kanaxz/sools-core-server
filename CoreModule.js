const Module = require('./Module')
const index = require('./index')

module.exports = class CoreModule extends Module {

  constructor(options) {
    super({
      ...options,
      index,
      ...index,
    })
  }

  async start() {
    this.load()
    this.loadAfter()
    await this.process(true)
    this.object.module = this
    await this.object.trigger('ready')
  }
}