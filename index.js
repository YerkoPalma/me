var choo = require('choo')
var css = require('sheetify')
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
  state.projects = {
    senadores: {title: 'senadores', description: 'Datos públicos disponibles en la página www.senado.cl', github: 'https://github.com/senadores-chile>', body: require('./views/projects/_senadores')},
    salvador: {title: 'Salvador', description: 'Pequeño sitio web que mantengo para mi hijo', github: 'https://github.com/YerkoPalma/salvador', site: 'http://salvador.palmanavea.com/', body: require('./views/projects/_salvador')},
    matrimonio: {title: 'Matrimonio', description: 'Parte de matrimonio interactivo (PWA)', site: 'https://matrimonio.palmanavea.com', body: require('./views/projects/_matrimonio')},
    'singleton-router': {title: 'singleton-router', description: 'Router front end a la medida', github: 'https://github.com/YerkoPalma/singleton-router', body: require('./views/projects/_router')},
    'palma-contabilidad': {title: 'Palma contabilidad', description: 'Contador independiente', site: 'http://palmacontabilidad.cl/', body: require('./views/projects/_contabilidad')}
  }
})
if (process.env.NODE_ENV === 'production') {
  app.use(require('choo-service-worker')())
}
app.route('/', require('./views/pages/home'))
app.route('/projects', require('./views/projects/index'))
app.route('/projects/:project', require('./views/projects/show'))
app.route('/blog', require('./views/posts/index'))
app.route('/blog/:post', require('./views/posts/post'))
app.route('/*', require('./views/notFound'))
app.mount('body')
