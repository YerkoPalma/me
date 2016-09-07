// Element: cover 
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')
const md5 = require('js-md5')

function cover (state) {
  return html`
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="https://s.gravatar.com/avatar/${md5(state.user.mail)}?s=180" class="img-circle center-block" style="display: block;" >
        </div>
        <div class="back">
          <div class="card">
            <a class="publicity" href="https://github.com/YerkoPalma" target="_blank">
              <i class="fa fa-github uncolor" aria-hidden="true"></i>
            </a>
            <a class="publicity" href="http://stackoverflow.com/users/3178237/yerko-palma" target="_blank">
              <i class="fa fa-stack-overflow uncolor" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}

module.exports = cover
