/* global navigator */
const choo = require('choo')
const sf = require('sheetify')
const offline = require('choo-offline')
const mainView = require('./views/main')
const notFoundView = require('./views/not-found')

sf('tachyons')
sf('./assets/style/main.css', { global: true })

const app = choo()

offline(offline => {
  if (process.env.NODE_ENV !== 'production') {
    const log = require('choo-log')
    app.use(log())
  }
  app.use(offline)

  app.model(require('./models/user'))

  app.router('/404', route => [
    route('/', mainView),
    route('/404', notFoundView)
  ])

  const tree = app.start()
  document.body.appendChild(tree)
})

// export app for tests
module.exports = app
