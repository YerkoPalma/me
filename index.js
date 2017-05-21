/* global navigator */
var Router = require('singleton-router')
var css = require('sheetify')

css('tachyons')

var state = {
  username: 'Yerko Palma',
  mail: 'yerko.palma@usach.cl',
  github: 'https://github.com/YerkoPalma',
  stackoverflow: 'https://stackoverflow.com/users/3178237/yerko-palma',
  linkedin: '',
  twitter: '',
  subtitle: 'Full stack developer',
  description: 'Desarrollador full stack, con preferencia por Javascript <3. También soy aficionado del diseño, con espiritu emprendedor. Actualmente trabajando como desarrollador .NET/Js, pero con ganas de ayudar en tu próximo proyecto.',
  initial: true
}

registerServiceWorker('/service-worker.js')

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
    previousView.style.transition = 'all 0.5s'
    previousView.classList.add('o-0')
  }
}

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
