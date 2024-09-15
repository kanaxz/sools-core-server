const eventRouter = () => {
  const events = {}
  const on = (eventName, listener) => {
    if (!events[eventName]) {
      events[eventName] = []
    }
    events[eventName].push(listener)
  }

  const trigger = async (eventName, ...args) => {
    const event = events[eventName]
    if (!event) { return }
    for (const listener of event) {
      await listener(...args)
    }
  }

  return {
    on,
    trigger,
  }
}

export default {
  name: 'core',
  construct() {
    const { on, trigger } = eventRouter()

    process.on('uncaughtException', (err) => {
      // Handle the error safely
      console.log(err)
    })

    return {
      on,
      trigger,
    }
  }
}