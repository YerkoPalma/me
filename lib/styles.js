var css = require('sheetify')

var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
  }
`
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
var octoCat = css`
  :host svg {
    position:absolute;
    right:0;
    top:0;
    mix-blend-mode:darken;
    color:#ffffff;fill:#000000;
  }
  :host:hover .octo-arm {
    animation:octocat-wave .56s;
  }
  @keyframes octocat-wave {
    0%, 100% {
      transform:rotate(0);
    }
    20%, 60% {
      transform:rotate(-20deg);
    }
    40%, 80% {
      transform:rotate(10deg);
    }
  }`

module.exports = {
  container,
  flipperContainer,
  octoCat
}
