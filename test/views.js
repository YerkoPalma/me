/* global describe beforeEach afterEach it */
const chooTest = require('choo-test')
const assert = require('assert')
const mainView = require('../src/views/main')
const userModel = require('../src/models/user')

describe('choo-app', () => {
  let app

  beforeEach(() => {
    app = chooTest()
    app.model(userModel)
    app.router((route) => [route('/', mainView)])
    app.start()
  })

  afterEach(() => {
    app.restore()
  })

  it('awesome SEO', () => {
    const h1 = app.$$('h1')
    assert.equal(h1.length, 1, 'Must have only one h1 tag per page')
    assert(h1[0].classList.contains('global-header'), 'Must have the right css class')
    // all images with an alt tag
    const imgs = app.$$('img')
    Array.prototype.forEach.call(imgs, img => {
      assert(img.alt && img.alt !== '', img + ' has no alt property')
    })
  })

  it('link to social media', () => {
    const links = app.$$('.card a')
    let checks = 0
    Array.prototype.map.call(links, link => {
      if (link.href.indexOf('github') > -1 || link.href.indexOf('stackoverflow') > -1) {
        checks++
      }
    })
    assert.equal(checks, 2)
  })

  it('link to projects', () => {
    const linkToProjects = app.$('a[title="Proyectos"]')
    assert(linkToProjects)
    assert.equal(linkToProjects.href, 'https://github.com/YerkoPalma')
  })
})
