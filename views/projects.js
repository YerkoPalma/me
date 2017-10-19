var html = require('bel')
var css = require('sheetify')

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

var container = css`
  :host {
    height: 97vh;
    transition: all 0.5s;
  }
`

var renderProjects = function (projects) {
  projects.sort(function () { return 0.5 - Math.random() })
  bgColors.sort(function () { return 0.5 - Math.random() })
  return projects.map(function (project, i) {
    return html`
    <a data-route="/projects/${i}" "class="link pointer bg-animate hover-bg-${bgColors[i]} fl w-100 w-third-m w-25-ns">
        ${project && project.title
          ? html`<div class="aspect-ratio aspect-ratio--16x9">
            <h3 class="db pl3 f2 lh-solid bg-center cover aspect-ratio--object ma0">${project.title}</h3>
              <p class="black-80 pl3 db lh-copy bg-center cover aspect-ratio--object ma0 pt5">${project.description}</p>
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
  <main class="w-100 pa2 bg-black min-vh-100">
    <div class="pa3 bg-white w-100 h-100 overflow-y-scroll ${container}">
      <h1 class="f1 ma0 lh-title black">Proyectos</h1>
      <div class="mv5 cf w-100">
        ${renderProjects(projects)}
      </div>
    </div>
  </main>`
}
module.exports = projectsView
