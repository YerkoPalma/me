// Element: navbar 
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const md5 = require('js-md5')

function navbar (state) {
  return html`
    <nav class="db dt-l w-100 border-box pa3 ph5-l navbar">
      <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
        <img src="https://s.gravatar.com/avatar/${md5(state.user.mail)}?s=240" class="dib w2 h2 br-100" alt="Site Name">
      </a>
      <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Proyectos">Proyectos</a>
        <a class="link dim dark-gray f6 f5-l dib" href="#" title="Blog">Blog</a>
      </div>
    </nav>
  `
}

module.exports = navbar
