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

idbKeyval.get('state').then(val => {
  var state = val || initState
  const router = Router()
  router.addRoute('/', mainView(initState))
  router.notFound(notFoundView(initState))
  
  router.setRoot('/')
  router.start()
})
