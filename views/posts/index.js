var md = require('../../lib/md')
var html = require('choo/html')
const { container } = require('../../lib/styles')

var posts = require('./post').posts
var dom = md`

${posts.reduce((_, post) => {
  return _ + `
  ## [${post.title}](${post.link})
  
  ${post.description}
  
  ---
`
}, '')}
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')

function blogView (state, emit) {
  return html`<body class="helvetica black w-100 pa2 bg-black min-vh-100">
    <div class="pa7-l pv6-l pv5 bg-white w-100 h-100 overflow-y-scroll ${container}">
      ${dom}
    </div>
  </body>`
}
module.exports = blogView
