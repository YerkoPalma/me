var md = require('../../lib/md')
var html = require('choo/html')
const { container } = require('../../lib/styles')

var dom = md`

## [Post title 1](/post1)

Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit 
amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen ...

---

## [Post title 2](/post2)

Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit 
amen Lorem ipsum dolor sit amen Lorem ipsum dolor sit amen ...

`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')

function blogView (params, store) {
  return html`<body class="helvetica black w-100 pa2 bg-black min-vh-100">
    <div class="pa7-l pt6-l pv5 bg-white w-100 h-100 overflow-y-scroll ${container}">
      ${dom}
    </div>
  </body>`
}
module.exports = blogView
