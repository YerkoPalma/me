const html = require('bel')
const Granim = require('granim')
const navbar = require('../components/navbar')
const footer = require('../components/footer')
const cover = require('../components/cover')

const mainView = function (initialState) { 
  return function (params, state) {
    state = state || initialState
    return html`
      <div class="container">
        ${navbar(state)}
        <canvas class="canvas-image" onload=${loadGranie}></canvas>
        <div class="mw5 mw7-ns center ph5-ns ma5">
          ${cover(state)}
          <h1 class="global-header mb0">${state.username}</h1>
          <p class="tc f3 light-red fw6 mv0">${state.subtitle}</p>
          <p class="f5 near-white lh-copy tc fw6">${state.description}</p>
        </div>
        ${footer()}
      </div>
    `
  }
}
module.exports = mainView

function loadGranie () {
  /* eslint-disable no-unused-vars */
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
