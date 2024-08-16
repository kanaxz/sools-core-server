const Module = require('./Module')

module.exports = class CoreModule extends Module {

  constructor(options) {
    super({
      ...options,
      name: 'sools-core',
      path: `${options.node_modules}/core-server/index.js`,
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