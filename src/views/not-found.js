/* Page: notFound */

const html = require('choo/html')

function notFound (state, prev, send) {
  return html`
    <main>
      <h1>notFound</h1>
    </main>
  `
}

module.exports = notFound
