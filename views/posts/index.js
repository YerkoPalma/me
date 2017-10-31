var md = require('../../lib/md')
var html = require('choo/html')
const { container } = require('../../lib/styles')

var posts = [
  {
    title: 'Post title 1',
    link: '/blog/post1',
    description: `Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit 
                  amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen ...`
  },
  {
    title: 'Post title 2',
    link: '/blog/post2',
    description: `Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit 
                  amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen ...`
  }
]
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

function blogView (params, store) {
  return html`<body class="helvetica black w-100 pa2 bg-black min-vh-100">
    <div class="pa7-l pv6-l pv5 bg-white w-100 h-100 overflow-y-scroll ${container}">
      ${dom}
    </div>
  </body>`
}
module.exports = blogView
