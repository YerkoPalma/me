const html = require('bel')
const md5 = require('js-md5')
const css = require('sheetify')

var flipperContainer = css`
  :host {
  	perspective: 1000;
  	margin: 0 auto;
  }
	:host:hover .flipper, :host.hover .flipper {
		transform: rotateY(180deg);
	}
  :host, .front, .back {
  	width: 180px;
  	height: 180px;
  }
  :host	.card .publicity, .front .card .publicity, .back .card .publicity {
    font-size: 2.5em;
    padding: 4px 8px;
    top: 30%;
    left: 30px;
  }
  :host	.card .publicity:last-child, .front .card .publicity:last-child, .back .card .publicity:last-child {
    left: 100px;
  } 
  .flipper {
  	transition: 0.6s;
  	transform-style: preserve-3d;
  }

  .front, .back {
  	backface-visibility: hidden;
  }
  .front {
  	z-index: 2;
  	transform: rotateY(0deg);
  }
  .back {
  	transform: rotateY(180deg);
  }
  :host:hover .flipper, :host.hover .flipper, :host.flip .flipper {
  	transform: rotateY(180deg);
  }
`
function cover (state) {
  return html`
    <div class="${flipperContainer}" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper relative">
        <div class="front absolute top-0">
          <img alt="Yerko Palma" src="https://s.gravatar.com/avatar/${md5(state.mail)}?s=180" class="br-100 center-block db" >
        </div>
        <div class="back br-100 absolute bg-silver top-0">
          <div class="card w-100 h-100 silver">
            <a class="publicity absolute white br-pill bg-animate hover-bg-dark-gray" href="${state.github}" target="_blank">
              <svg viewBox="0 0 16 16" width="32" height="32" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" /></svg>
            </a>
            <a class="publicity absolute white br-pill bg-animate hover-bg-dark-gray" href="${state.stackoverflow}" target="_blank">
              <svg viewBox="0 0 16 16" width="32" height="32" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693h1.42v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.46.3-1.38L4.55 8.54l-.302 1.38zm.906-3.37l6.47 3.02.602-1.3-6.47-3.02-.602 1.29zm1.81-3.19l5.478 4.57.906-1.08L7.87 2.28l-.9 1.078zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}

module.exports = cover
