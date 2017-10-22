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
var md = Markdown(null, null, {paragraph_open})
var dom = md`
El año 2017 hay elecciones parlamentarias en Chile y yo siempre he considerado que la información disponible respecto a los candidatos es poca. No sobre los candidatos presidenciales, sino los candidatos a diputados y senadores. Gracias a la ley de transparencia, hoy esa información esta disponible para quien la solicite, sin embargo, se encuentra en un formato poco amigable y sin un formato accesible para programadores. Es por esto, que decidí juntar en un solo sitio la información del senado y servel y crear una API amigable para programadores con la informacion publica de senadores.
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
