/* global navigator */
const Router = require('singleton-router')
const sf = require('sheetify')
const mainView = require('./views/main')
const notFoundView = require('./views/not-found')
const idbKeyval = require('idb-keyval')

sf('tachyons')
sf('./assets/style/main.css', { global: true })

const initState = {
  username: 'Yerko Palma',
  mail: 'yerko.palma@usach.cl',
  github: 'https://github.com/YerkoPalma',
  stackoverflow: 'https://stackoverflow.com/users/3178237/yerko-palma',
  subtitle: 'Full stack developer',
  description: 'Desarrollador full stack, con preferencia por Javascript <3. También soy aficionado del diseño, con espiritu emprendedor. Actualmente trabajando como desarrollador .NET/Js, pero con ganas de ayudar en tu próximo proyecto.',
  initial: true
}

registerServiceWorker('/service-worker.js')

idbKeyval.get('state').then(function (val) {
  var state = val || initState
  const router = Router()
  router.addRoute('/', mainView(state))
  router.notFound(notFoundView(state))

  router.setRoot('/')
  router.start()
  // ensure state is updated
  idbKeyval.set('state', state)
})

function registerServiceWorker (swPath) {
  if ('serviceWorker' in navigator) {
    if (process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register(window.location.origin + swPath).then(function (reg) {
        reg.onupdatefound = function () {
          var installingWorker = reg.installing

          installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  console.log('New or updated content is available.')
                } else {
                  console.log('Content is now available offline!')
                }
                break
              case 'redundant':
                console.error('The installing service worker became redundant.')
                break
            }
          }
        }
      })
      .catch(function (e) {
        console.error('Error during service worker registration:', e)
      })
    }
  }
}
