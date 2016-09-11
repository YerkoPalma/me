const html = require('choo/html')
const Granim = require('granim')
const localforage = require('localforage')
const navbar = require('../components/navbar')
const footer = require('../components/footer')
const cover = require('../components/cover')

const mainView = (state, prev, send) => {
  return html`
    <div class="container" onload=${loadLocalState(this, state, send)}>
      ${navbar(state)}
      <canvas class="canvas-image" onload=${loadGranie}></canvas>
      <div class="mw5 mw7-ns center ph5-ns ma5">
        ${cover(state)}
        <h1 class="global-header">Welcome <span class="global-header-highlight">${state.user.username}</span></h1>
      </div>
      ${footer()}
    </div>
  `
}

module.exports = mainView

function loadGranie () {
  window.Granim = Granim
  var granimInstance = new Granim({
    element: '.canvas-image',
    direction: 'top-bottom',
    opacity: [1, 0.5, 0],
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        gradients: [
          ['#bd1d56', '#b8857d', '#29323c'],
          ['#75e488', '#0072ff', '#8c1777']
        ],
        transitionSpeed: 5000
      }
    }
  })
}

function loadLocalState (element, state, send) {
  return function () {
    if (state.user.initial) {
      localforage.getItem('app').then(localState => {
        if (localState) send('user:init', { localState })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}