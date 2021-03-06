var html = require('choo/html')
const { container } = require('../../lib/styles')

var bgColors = [
  'light-red',
  'gold',
  'light-purple',
  'pink',
  'green',
  'blue',
  'yellow',
  'light-green'
]

var renderProjects = function (projects) {
  bgColors.sort(function () { return 0.5 - Math.random() })
  return Object.keys(projects).map(function (project, i) {
    return html`
    <a href="/projects/${project}" "class="link black pointer bg-animate hover-bg-${bgColors[i]} fl w-100 w-third-m w-25-ns">
        ${projects[project] && projects[project].title
          ? html`<div class="aspect-ratio aspect-ratio--16x9">
            <h3 class="db pl3 f2 lh-solid bg-center cover aspect-ratio--object ma0">${projects[project].title}</h3>
              <p class="black-80 pl3 db lh-copy bg-center cover aspect-ratio--object ma0 pt5">${projects[project].description}</p>
            </div>`
          : html`<div class="aspect-ratio aspect-ratio--16x9 bg-silver">
            </div>`}
      </div>
    </a>`
  })
}
function projectsView (state) {
  var projects = state.projects
  console.log('projects view', projects)
  return html`
  <body class="helvetica black w-100 pa2 bg-black min-vh-100">
    <div class="pa3 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <a class="pointer link black" href="/">
        <svg class="i-arrow-left" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
        </svg>
      </a>
      <h1 class="f1 ma0 lh-title black">Proyectos</h1>
      <div class="mv5 cf w-100">
        ${renderProjects(projects)}
      </div>
    </div>
  </body>`
}
module.exports = projectsView
