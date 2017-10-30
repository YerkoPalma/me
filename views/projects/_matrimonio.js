var md = require('../../lib/md')

var dom = md`
![matrimonio.palmanavea.com](https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/b015cb4e4f6c3a53f771737729abeb9f97ce54bc/png?url=matrimonio.palmanavea.com)
El verano del 2017 me casé. Junto a mi esposa teniamos que hacer una serie de 
preparativos (casarse parecese ser más trabajo que cualquier desarrollo de 
software). Dentro de todo, decidí hacer algo especial para entregar mis partes 
de matrimonio. Junto con los partes fisicos, desarrollé una 
[aplicación web progresiva](https://en.wikipedia.org/wiki/Progressive_web_app) 
con la información necesaria para asistir a nuestro matrimonio. Utilicé el 
framework [choo](https://en.wikipedia.org/wiki/Progressive_web_app) , para el 
cual desarrollé un [plugin](https://github.com/YerkoPalma/choo-offline) que 
aporta las funcionalidades offline que una pwa necesita (uso de 
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) y 
[service workers](https://developers.google.com/web/fundamentals/primers/service-workers/)). 
También usé el framework [tachyons](http://tachyons.io/) (el mismo con el que 
desarrollé esta página) y 
[mapbox.js](https://www.mapbox.com/mapbox.js/api/v3.1.0/), para mapbox.js usé un 
[plugin de direcciones](https://www.mapbox.com/mapbox.js/example/v1.0.0/mapbox-directions/) 
que actualmente no tiene soporte para español (pese a haber una PR abierta para 
internacionalización), por lo que tuve que públicar 
[mi propia versión del plugin](https://www.npmjs.com/package/@yerkopalma/mapbox-directions.js), 
como un scoped package en npm, que daba el soporte que necesitaba.
`
dom.classList.add('pa4', 'ph5-l', 'georgia', 'mw9-l', 'center')
module.exports = dom
