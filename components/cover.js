const html = require('bel')
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
  :host  .card .publicity, .front .card .publicity, .back .card .publicity {
    font-size: 2.5em;
    padding: 0px 8px;
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
  #github {
    top: 1rem;
    left: 4rem;
  }
  #stackoverflow {
    top: 7rem;
    left: 4rem;
  }
  #linkedin {
    top: 4rem;
    left: 1rem;
  }
  #twitter {
    top: 4rem;
    left: 7rem;
  }
`
function cover (state) {
  return html`
    <div class="${flipperContainer}" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper relative">
        <div class="front absolute top-0">
          <img alt="Yerko Palma" src="https://s.gravatar.com/avatar/d809533c5ce964b709e2b38e6573973b?s=180" class="br-100 center-block db" >
        </div>
        <div class="back br-100 absolute bg-light-red top-0">
          <div class="card w-100 h-100 silver">
            <a id="github" class="publicity absolute white br-pill bg-animate hover-bg-dark-gray" href="${state.github}" target="_blank">
              <svg viewBox="0 0 16 16" width="32" height="32" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" /></svg>
            </a>
            <a id="stackoverflow" class="publicity absolute white br-pill bg-animate hover-bg-dark-gray" href="${state.stackoverflow}" target="_blank">
              <svg viewBox="0 0 16 16" width="32" height="32" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693h1.42v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.46.3-1.38L4.55 8.54l-.302 1.38zm.906-3.37l6.47 3.02.602-1.3-6.47-3.02-.602 1.29zm1.81-3.19l5.478 4.57.906-1.08L7.87 2.28l-.9 1.078zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z" /></svg>
            </a>
            <a id="twitter" class="publicity absolute white br-pill bg-animate hover-bg-dark-gray" href="${state.twitter}" target="_blank">
              <svg viewBox="0 0 16 16" width="32" height="32" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero" /></svg>
            </a>
            <a id="linkedin" class="publicity absolute white br-pill bg-animate hover-bg-dark-gray" href="${state.linkedin}" target="_blank">
              <svg viewBox="0 0 16 16" width="32" height="32" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}

module.exports = cover
