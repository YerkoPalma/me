const html = require('choo/html')
const localforage = require('localforage')
const input = require('../components/input')
const navbar = require('../components/navbar')
const footer = require('../components/footer')
const cover = require('../components/cover')

const mainView = (state, prev, send) => {
  return html`
    <div class="container" onload=${loadLocalState(this, state, send)}>
      ${navbar(state)}
      <div class="mw5 mw7-ns center ph5-ns ma7">
        ${cover(state)}
        <h1 class="global-header">Welcome <span class="global-header-highlight">${state.user.username}</span></h1>
        ${input(state, send)}
      </div>
      ${footer()}
    </div>
  `
}

module.exports = mainView

function loadLocalState (element, state, send) {
  return function () {
    if (state.user.initial) {
      localforage.getItem('app').then(localState => {
        send('user:init', { localState })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
