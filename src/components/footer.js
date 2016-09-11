const html = require('bel')

function footer () {
  return html`
    <footer class="pv4 ph3 ph5-m ph6-l white">
      <small class="f6 db tc">© ${new Date().getFullYear()} All Rights Reserved</small>
      <div class="tc mt3">
        <a href="/language/" title="Language" class="f6 dib ph2 link white dim">Language</a>
        <a href="/terms/"    title="Terms" class="f6 dib ph2 link white dim">Terms of Use</a>
        <a href="/privacy/"  title="Privacy" class="f6 dib ph2 link white dim">Privacy</a>
      </div>
    </footer>
  `
}

module.exports = footer
