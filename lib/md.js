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
module.exports = Markdown(null, null, {paragraph_open, link_open, image})