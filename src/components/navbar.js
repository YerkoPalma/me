const html = require('choo/html')
const md5 = require('js-md5')

function navbar (state) {
  return html`
    <nav class="db dt-l w-100 border-box pa3 ph5-l navbar">
      <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
        <img src="https://s.gravatar.com/avatar/${md5(state.user.mail)}?s=240" class="dib w2 h2 br-100" alt="Yerko Palma">
      </a>
      <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a class="link dim dark-gray tracked-mega fw6 f6 f5-l dib mr3 mr4-l" href="${state.user.github}" title="Proyectos">Proyectos</a>
        <a class="link dim dark-gray tracked-mega fw6 f6 f5-l dib" href="/blog" title="Blog">Blog</a>
      </div>
    </nav>
  `
}

module.exports = navbar
