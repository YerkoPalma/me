const html = require('bel')
const md5 = require('js-md5')

function navbar (state) {
  return html`
    <nav class="db absolute top-0 left-0 dt-l w-100 border-box pa3 ph5-l navbar">
      <a class="dn db-l db-m db-ns dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
        <img src="https://s.gravatar.com/avatar/${md5(state.mail)}?s=240" class="dib w2 h2 br-100" alt="Yerko Palma">
      </a>
      <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a data-route="/projects" class="link dim pointer dark-gray tracked-mega fw6 f6 f5-l dib mr3 mr4-l" title="Proyectos">Proyectos</a>
        <a class="link dim dark-gray tracked-mega fw6 f6 f5-l dib" href="/blog" title="Blog">Blog</a>
      </div>
    </nav>
  `
}

module.exports = navbar
