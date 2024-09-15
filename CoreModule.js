import Module from './Module.js'
import index from './index.js'

export default (
  class CoreModule extends Module {
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
)