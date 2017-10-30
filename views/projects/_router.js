var md = require('../../lib/md')
var dom = md`
Como desarrollador javascript, siempre estoy buscando un buen set de 
herramientas de desarrollo para mis trabajos. Nunca me gustaron mucho las 
herramientas “de moda” (angular en su momento y react ahora) y he pasado una 
transición que partió con jquery, luego [vue](https://vuejs.org/) y finalmente 
[choo](https://choo.io/). Este último framework es el que más se acerca a mis 
expectativas, si no fuese por un solo detalle, el router. Como 
[sheet-router](https://github.com/yoshuawuyts/sheet-router) , y luego 
[nanorouter](https://github.com/choojs/nanorouter) , no cumplian mis 
expectativas, cree mi propio router y mi propio stack de desarrollo, que se 
ajusta perfecto a mis expectativas.
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
