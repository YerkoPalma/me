var md = require('../../lib/md')
var dom = md`
El año 2017 hay elecciones parlamentarias en Chile y yo siempre he considerado 
que la información disponible respecto a los candidatos es poca. No sobre los 
candidatos presidenciales, sino los candidatos a diputados y senadores. 
Gracias a la ley de transparencia, hoy esa información esta disponible para 
quien la solicite, sin embargo, se encuentra en un formato poco amigable y sin 
un formato accesible para programadores. Es por esto, que decidí juntar en un 
solo sitio la información del senado y servel y crear una API amigable para 
programadores con la informacion publica de senadores.
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
