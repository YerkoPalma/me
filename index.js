var choo = require('choo')
var css = require('sheetify')
var html = require('bel')
var app = choo()

css('tachyons')

app.use((state, emitter) => {
  state.username = 'Yerko Palma'
  state.mail = 'yerko.palma@usach.cl'
  state.github = 'https://github.com/YerkoPalma'
  state.stackoverflow = 'https://stackoverflow.com/users/3178237/yerko-palma'
  state.linkedin = 'https://www.linkedin.com/in/yerko-palma-b52a5a28/'
  state.twitter = 'https://twitter.com/yerko_palma?s=03'
  state.subtitle = 'Full stack developer'
  state.description = 'Desarrollador full stack, con preferencia por Javascript <3. También soy aficionado del diseño, con espiritu emprendedor. Actualmente trabajando como desarrollador .NET/Js, pero con ganas de ayudar en tu próximo proyecto.'
  state.initial = true
  state.projects = [
    {title: 'senadores', description: 'Datos públicos disponibles en la página www.senado.cl', github: 'https://github.com/senadores-chile>', body: require('./views/_senadores')},
    {title: 'Salvador', description: 'Pequeño sitio web que mantengo para mi hijo', github: 'https://github.com/YerkoPalma/salvador', site: 'http://salvador.palmanavea.com/', body: require('./views/_salvador')},
    {title: 'Matrimonio', description: 'Parte de matrimonio interactivo (PWA)', site: 'https://matrimonio.palmanavea.com', body: html`<article class="mt7 ph6-l mt0-l"> <div class="pa4 ph5-l georgia mw9-l center"> <img class="mw-100" src="https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/b015cb4e4f6c3a53f771737729abeb9f97ce54bc/png?url=matrimonio.palmanavea.com" alt="matrimonio.palmanavea.com"> <p class="f5 f3-ns lh-copy measure-wide georgia"> El verano del 2017 me casé. Junto a mi esposa teniamos que hacer una serie de preparativos (casarse parecese ser más trabajo que cualquier desarrollo de software). Dentro de todo, decidí hacer algo especial para entregar mis partes de matrimonio. Junto con los partes fisicos, desarrollé una <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://en.wikipedia.org/wiki/Progressive_web_app">aplicación web progresiva</a> con la información necesaria para asistir a nuestro matrimonio. Utilicé el framework <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://choo.io">choo</a> , para el cual desarrollé un <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://github.com/YerkoPalma/choo-offline">plugin</a> que aporta las funcionalidades offline que una pwa necesita (uso de <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> y <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers">service workers</a>). También usé el framework <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="http://tachyons.io/">tachyons</a> (el mismo con el que desarrollé esta página) y <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://www.mapbox.com/mapbox.js/api/v3.1.0/">mapbox.js</a>, para mapbox.js usé un <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://www.mapbox.com/mapbox.js/example/v1.0.0/mapbox-directions/">plugin de direcciones</a> que actualmente no tiene soporte para español (pese a haber una PR abierta para internacionalización), por lo que tuve que públicar <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://www.npmjs.com/package/@yerkopalma/mapbox-directions.js">mi propia versión del plugin</a>, como un scoped package en npm, que daba el soporte que necesitaba.</p></div></article>`},
    {title: 'singleton-router', description: 'Router front end a la medida', github: 'https://github.com/YerkoPalma/singleton-router', body: require('./views/_router')},
    {title: 'Palma contabilidad', description: 'Contador independiente', site: 'http://palmacontabilidad.cl/', body: html`<article class="mt7 ph6-l mt0-l"> <div class="pa4 ph5-l georgia mw9-l center"> <img class="mw-100" src="https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/f916f765f43f7acfc10fda551be806ccc56f82e5/png?url=palmacontabilidad.cl" alt="palmacontabilidad.cl"> <p class="f5 f3-ns lh-copy measure-wide georgia"> Uno de los primeros sitios que desarrollé, y que he reconstruido por lo menos unas 4 veces.Se trata básicamente de una landing page hecha para la empresa de contabilidad de mi papá.Originalmente, desarrollé la primera versión usando jquery y plantillas de <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="http://getbootstrap.com/">Bootstrap</a> 3, cuando recién habia aparecido esa versión, luego, reconstruí la página sin usar Bootstrap, actualmente, la página esta desarrollada con <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="https://vuejs.org/">Vue</a> 1.x y <a class="link pointer bb b--dashed bt-0 bl-0 br-0 bw2 bg-animate hover-bg-light-red b--light-red black" href="http://materializecss.com/">materializecss</a>.</p></div></article>`},
    {},
    {},
    {}
  ]
})
app.route('/', require('./views/main'))
app.route('/projects', require('./views/projects'))
app.route('/projects/:project', require('./views/project'))
app.route('/*', require('./views/notFound'))
app.mount('body')
