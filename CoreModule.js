const Module = require('./Module')

module.exports = class CoreModule extends Module {

  constructor(options) {
    super({
      ...options,
      name: 'core',
      path: `${options.node_modules}/sools-core-server/index.js`,
    })
  }

  async loadModules() {
    super.loadModules()
    const rootModule = new Module({
      isFile: false,
      name: 'src',
      parent: this,
      path: this.options.root,
    })
    rootModule.load()
    this.modules.unshift(rootModule)
  }

  async start() {
    this.load()
    this.loadAfter()
    await this.process(true)
    this.object.module = this
    await this.object.trigger('ready')
  }
}