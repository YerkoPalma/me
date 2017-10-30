var md = require('../../lib/md')
  
var dom = md`
![palmacontabilidad.cl](https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/f916f765f43f7acfc10fda551be806ccc56f82e5/png?url=palmacontabilidad.cl)
Uno de los primeros sitios que desarrollé, y que he reconstruido por lo menos 
unas 4 veces. Se trata básicamente de una landing page hecha para la empresa de 
contabilidad de mi papá. Originalmente, desarrollé la primera versión usando 
jquery y plantillas de [Bootstrap 3](https://getbootstrap.com/docs/3.3/), 
cuando recién habia aparecido esa versión, luego, reconstruí la página sin usar 
Bootstrap, actualmente, la página esta desarrollada con [Vue](https://vuejs.org/) 
1.x y [materializecss](http://materializecss.com/).
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
