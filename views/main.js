var html = require('bel')
var css = require('sheetify')
const navbar = require('../components/navbar')
const cover = require('../components/cover')

var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
  }
`
function mainView (state) {
  return html`
  <body class="helvetica w-100 pa2 bg-black min-vh-100">
    <div class="pa3 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <div class="mv4 mv5-lcf w-100">
        ${navbar(state)}
        <div class="mw5 mw7-ns center ph5-ns mh5">
          ${cover(state)}
          <h1 class="near-black lh-copy tc mb0">${state.username}</h1>
          <p class="tc f3 light-red fw6 mv0">${state.subtitle}</p>
          <p class="f5 near-black lh-copy tc fw6">${state.description}</p>
        </div>
        <footer class="pv3 ph3 ph5-m ph6-l near-black">
          <small class="f6 db tc">© ${new Date().getFullYear()} All Rights Reserved</small>
        </footer>
      </div>
    </div>
  </body>`
}

module.exports = mainView
