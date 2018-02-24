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
function blockquote_open (tokens, idx, options, env, self) { // eslint-disable-line camelcase
  var aIndex = tokens[idx].attrIndex('class')
  if (aIndex < 0) {
    tokens[idx].attrPush(['class', 'i pl4 bl bw1 b--light-red mb4'])
  } else {
    tokens[idx].attrs[aIndex][1] = 'i pl4 bl bw1 b--light-red mb4'
  }
  return defaultRender(tokens, idx, options, env, self)
}
function image (tokens, idx, options, env, self) { // eslint-disable-line camelcase
  var aIndex = tokens[idx].attrIndex('class')
  if (aIndex < 0) {
    tokens[idx].attrPush(['class', 'mw-100 w-50 db center'])
  } else {
    tokens[idx].attrs[aIndex][1] = 'mw-100 w-50 db center'
  }
  return defaultRender(tokens, idx, options, env, self)
}
function heading_open (tokens, idx, options, env, self) { // eslint-disable-line camelcase
  var aIndex = tokens[idx].attrIndex('class')
  var level = parseInt(tokens[idx].level) + 1
  if (aIndex < 0) {
    tokens[idx].attrPush(['class', 'f' + level])
  } else {
    tokens[idx].attrs[aIndex][1] = 'f' + level
  }
  return defaultRender(tokens, idx, options, env, self)
}
module.exports = Markdown('default', { html: true }, {paragraph_open, link_open, image, heading_open, blockquote_open})
