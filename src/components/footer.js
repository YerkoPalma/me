const html = require('choo/html')

function footer () {
  return html`
    <footer class="pv3 ph3 ph5-m ph6-l white">
      <small class="f6 db tc">© ${new Date().getFullYear()} All Rights Reserved</small>
    </footer>
  `
}

module.exports = footer
