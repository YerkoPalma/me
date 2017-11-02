var html = require('choo/html')
const { container } = require('../../lib/styles')

function postView (state, emit) {
  return html`<body class="helvetica black w-100 pa2 bg-black min-vh-100">
    <div class="pa7-l pv6-l pv5 bg-white w-100 h-100 overflow-y-scroll ${container}">
      ${require('./_' + state.params.post)}
    </div>
  </body>`
}

module.exports = postView
module.exports.posts = [
  {
    title: 'La sorprendentemente desconocida historia de las mujeres en computación',
    link: '/blog/historia-mujeres-en-computacion',
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
