var Markdown = require('marli')

var defaultRender = function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options)
}
function paragraph_open (tokens, idx, options, env, self) { // eslint-disable-line camelcase
  var aIndex = tokens[idx].attrIndex('class')
  if (aIndex < 0) {
    tokens[idx].attrPush(['class', 'f5 f3-ns lh-copy measure-wide georgia'])
  } else {
    tokens[idx].attrs[aIndex][1] = 'f5 f3-ns lh-copy measure-wide georgia'
  }
  return defaultRender(tokens, idx, options, env, self)
}
function link_open (tokens, idx, options, env, self) { // eslint-disable-line camelcase
  var aIndex = tokens[idx].attrIndex('class')
  if (aIndex < 0) {
    tokens[idx].attrPush(['class', 'link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black'])
  } else {
    tokens[idx].attrs[aIndex][1] = 'link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black'
  }
  return defaultRender(tokens, idx, options, env, self)
}
function image (tokens, idx, options, env, self) { // eslint-disable-line camelcase
  var aIndex = tokens[idx].attrIndex('class')
  if (aIndex < 0) {
    tokens[idx].attrPush(['class', 'mw-100'])
  } else {
    tokens[idx].attrs[aIndex][1] = 'mw-100'
  }
  return defaultRender(tokens, idx, options, env, self)
}
var md = Markdown(null, null, {paragraph_open, link_open, image})
var dom = md`
![palmacontabilidad.cl](https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/f916f765f43f7acfc10fda551be806ccc56f82e5/png?url=palmacontabilidad.cl)
Uno de los primeros sitios que desarrollé, y que he reconstruido por lo menos unas 4 veces. 
Se trata básicamente de una landing page hecha para la empresa de contabilidad de mi papá. 
Originalmente, desarrollé la primera versión usando jquery y plantillas de [Bootstrap 3](https://getbootstrap.com/docs/3.3/), cuando 
recién habia aparecido esa versión, luego, reconstruí la página sin usar Bootstrap, actualmente, 
la página esta desarrollada con [Vue](https://vuejs.org/) 1.x y [materializecss](http://materializecss.com/).
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
