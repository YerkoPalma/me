var html = require('choo/html')
var css = require('sheetify')

var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
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

function projectView (state) {
  var project = state.projects[state.params.project]
  if (!project) return require('./notFound')()
  return html`<body class="helvetica w-100 pa2 bg-black min-vh-100"">
    <div id="projectBody" class="pa3 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <a class="pointer link" href="/projects">
        <svg class="i-arrow-left" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
        </svg>
      </a>
      <h1 class="f1 w-75 dip absolute top-0 left-2-l left--2 mh5 mt6 mt4-l bg-white">${project.title} ${siteLink(project.site)}</h1>
      ${octolink(project.github)}
      <article class="mt7 ph6-l mt0-l">
        ${project.body}
      </article>
    </div>
  </body>`
}
function octolink (repo) {
  if (repo) {
    return html`<a class="${octoCat}" href="${repo}" title="Fork me on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255); position: absolute; top: 0px; border: 0px; right: 0px;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px 0px;" /><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" /></svg></a>`
  }
}
function siteLink (site) {
  if (site) {
    return html`<a target="_blank" class="link pointer bb bw2 bg-animate hover-bg-light-red b--light-red black" href="${site}"><svg class="i-link" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15"></path>
    </svg></a>`
  }
}
module.exports = projectView
