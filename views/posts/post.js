/* global fetch */
var html = require('choo/html')
var md = require('../../lib/md')
const { container } = require('../../lib/styles')
var postHtml

function postView (state, emit) {
  if (!postHtml) {
    fetch('../_' + state.params.post + '.md')
    .then(response => response.text())
    .then(content => {
      postHtml = md`${content}`
      emit('render')
    })
  }

  return html`<body class="helvetica black w-100 pa2 bg-black min-vh-100">
    <div class="pa7-l pv6-l pv5 bg-white w-100 h-100 overflow-y-scroll ${container}">
      ${postHtml || html`<h2>Loading...</h2>`}
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
