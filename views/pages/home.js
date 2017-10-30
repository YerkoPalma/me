var html = require('choo/html')
var css = require('sheetify')
const cover = require('./_cover')

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
        <nav class="db absolute top-0 left-0 dt-l w-100 border-box pa3 ph5-l navbar">
          <a class="dn db-l db-m db-ns dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
            <img src="https://s.gravatar.com/avatar/d809533c5ce964b709e2b38e6573973b?s=240" class="dib w2 h2 br-100" alt="Yerko Palma">
          </a>
          <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a href="/projects" class="link dim pointer dark-gray tracked-mega fw6 f6 f5-l dib mr3 mr4-l" title="Proyectos">Proyectos</a>
            <a class="link dim dark-gray tracked-mega fw6 f6 f5-l dib" href="/blog" title="Blog">Blog</a>
          </div>
        </nav>
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
