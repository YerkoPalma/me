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
var md = Markdown(null, null, {paragraph_open, link_open})
var dom = md`
Como desarrollador javascript, siempre estoy buscando un buen set de herramientas de desarrollo para mis trabajos. 
Nunca me gustaron mucho las herramientas “de moda” (angular en su momento y react ahora) y he pasado una transición 
que partió con jquery, luego [vue](https://vuejs.org/) y finalmente [choo](https://choo.io/). Este último framework es el que más se acerca a mis expectativas, 
si no fuese por un solo detalle, el router. Como [sheet-router](https://github.com/yoshuawuyts/sheet-router) , y luego [nanorouter](https://github.com/choojs/nanorouter) , no cumplian mis expectativas, 
cree mi propio router y mi propio stack de desarrollo, que se ajusta perfecto a mis expectativas.
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
