var html = require('bel')
var css = require('sheetify')

var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
  }
`

function notFoundView (params, store) {
  return html`<main class="w-100 pa2 bg-black min-vh-100">
    <div class="pa7 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <h1 class=" dib f-headline ma0 lh-title black tc w-100">
        <span class="w-50 tr br bw3 pa3 pr5">404</span>
        <span class="f-subheadline v-mid lh-solid dib tl w-50 word-wrap pl4">No encontrado</span>
      </h1>
    </div>
  </main>`
}

module.exports = notFoundView
