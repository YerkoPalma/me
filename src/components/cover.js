const html = require('choo/html')
const md5 = require('js-md5')

function cover (state) {
  return html`
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img alt="Yerko Palma" src="https://s.gravatar.com/avatar/${md5(state.user.mail)}?s=180" class="br-100 center-block" style="display: block;" >
        </div>
        <div class="back">
          <div class="card">
            <a class="publicity" href="${state.user.github}" target="_blank">
              <i class="icon-github-circled" aria-hidden="true"></i>
            </a>
            <a class="publicity" href="${state.user.stackoverflow}" target="_blank">
              <i class="icon-stackoverflow" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}

module.exports = cover
