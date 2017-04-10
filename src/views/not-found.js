/* Page: notFound */
const Granim = require('granim')
const html = require('bel')

const notFound = function (initialState) { 
  return function (params, state)  {
    state = state || initialState
    return html`
    <section class="mw-100 mw7-ns center pa5-ns pa5-m pa5-l pa4">
      <h1 class="mt0 tc ttu f-subheadline light-red">Error 404</h1>
      <p class="lh-copy measure f3 tc fw6 near-white">
        Lo siento, la página que buscas no existe (aún). Esto es lo que hay por ahora:
      </p>
      <ul class="list ph3 ph5-ns pv4 center flex justify-around">
        <li class="dib mr2"><a href="/" class="f5 f4-ns b db pa2 tracked link dim near-white">Inicio</a></li>
        <li class="dib mr2"><a href="${state.github}" class="f5 tracked f4-ns b db pa2 link dim near-white">Proyectos</a></li>
      </ul>
      <canvas class="error-canvas" onload=${loadGranie}></canvas>
    </section>
    `
  }
}

module.exports = notFound

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
