/* Page: notFound */
const Granim = require('granim')
const html = require('choo/html')

const notFound = (state, prev, send) => {
  return html`
    <div class="error">
      <h1>notFound</h1>
      <canvas class="error-canvas" onload=${loadGranie}></canvas>
    </div>
  `
}

function loadGranie () {
  /* eslint-disable no-unused-vars */
  var granimInstance = new Granim({
    element: '.error-canvas',
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

module.exports = notFound
