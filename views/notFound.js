var html = require('choo/html')
const { container } = require('../lib/styles')

function notFoundView (state, emit) {
  return html`<body class="w-100 pa2 bg-black min-vh-100">
    <div class="pa7-l pt6-l pv5 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <h1 class=" dib f-headline word-wrap ma0 lh-title black tl w-100">
        <span class="w-100 w-25-l tr br-l tc db dib-l bw3-l pa3-l pr5-l">404</span>
        <span class="f-subheadline-l f2 v-mid tc tl-l lh-solid dib tl w-100 w-25-l word-wrap pl4-l">No encontrado</span>
      </h1>
    </div>
  </body>`
}

module.exports = notFoundView
