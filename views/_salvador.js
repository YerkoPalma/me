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
![salvador.palmanavea.com](https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/15a27488df9d7bda08381c4236050a637745b7bb/png?url=salvador.palmanavea.com)
Para el primer cumpleaños de mi hijo, quise hacerle un regalo especial. 
Pense primero (y aún lo pienso a veces), en crear un juego para él, pero descarte temporalmente esa idea, 
ya que estaba corto de tiempo, y era recien su primer cumpleaños. Entonces decidí crear una línea de tiempo 
para mi hijo, usé un template de [codrops](https://tympanus.net/codrops/) , y compré un dominio "familiar". Más adelante agregué más plugins, 
mejoré el soporte de imagenes y videos usando [lightgallery](https://github.com/sachinchoolur/lightgallery.js) (incluso tuve que corregir un [issue](https://github.com/sachinchoolur/lightgallery.js/issues/41) que no permitia 
ver imagenes y videos en la misma página) y me quede con el framework [choo](https://choo.io/) 3.x. Cada año la iré actualizando 
y mejorando, quién sabe, quizas le agregue algún juego, o música, todo puede pasar…
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
