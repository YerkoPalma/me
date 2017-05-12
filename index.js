var Router = require('singleton-router')
var css = require('sheetify')

css('tachyons')

var state = {
  username: 'Yerko Palma',
  mail: 'yerko.palma@usach.cl',
  github: 'https://github.com/YerkoPalma',
  stackoverflow: 'https://stackoverflow.com/users/3178237/yerko-palma',
  subtitle: 'Full stack developer',
  description: 'Desarrollador full stack, con preferencia por Javascript <3. También soy aficionado del diseño, con espiritu emprendedor. Actualmente trabajando como desarrollador .NET/Js, pero con ganas de ayudar en tu próximo proyecto.',
  initial: true
}

var router = Router({ onRender: onRender })

router.addRoute('/', require('./views/main'))
router.notFound(require('./views/notFound'))
router.setStore(state)
router.setRoot('/')
router.start()

function onRender (currentView, previousView, cb) {
  // make dissappear the previousView
  previousView.addEventListener('transitionend', function (e) {
    if (currentView && currentView.classList) {
      // currentView.classList.add('t')
      currentView.style.transition = 'all 0.5s'
      currentView.classList.add('o-0')
    }
    // e.stopPropagation()
    // replace it with the currentView
    router.rootEl.appendChild(currentView)
    router.rootEl.removeChild(previousView)
    // make it appear
    if (currentView && currentView.classList) currentView.classList.remove('o-0')
    if (typeof cb === 'function') cb(router.currentRoute.params)

    var links = document.querySelectorAll('a[data-route]')
    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        if (!link.getAttribute('data-bind')) router.goToPath(link.getAttribute('data-route'))
        if (typeof router.onNavClick === 'function') router.onNavClick(link.getAttribute('data-route'), link)
      })
    })
  })
  if (previousView && previousView.classList) {
    // previousView.classList.add('t')
    previousView.style.transition = 'all 0.5s'
    previousView.classList.add('o-0')
  }
}
