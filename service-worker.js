/* eslint-env serviceworker */
/* global fetch URL Request */

var version = '3.0.0'
var cacheName = 'ypsw-v' + version

var filesToCache = [
  '/',
  '/index.html',
  '/CNAME',
  '/bundle.js',
  '/favicon.ico',
  '/bundle.css',
  'https://s.gravatar.com/avatar/d809533c5ce964b709e2b38e6573973b?s=240',
  'https://s.gravatar.com/avatar/d809533c5ce964b709e2b38e6573973b?s=180',
  'https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/f916f765f43f7acfc10fda551be806ccc56f82e5/png?url=palmacontabilidad.cl',
  'https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/b015cb4e4f6c3a53f771737729abeb9f97ce54bc/png?url=matrimonio.palmanavea.com',
  'https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/15a27488df9d7bda08381c4236050a637745b7bb/png?url=salvador.palmanavea.com'
]

var urlsToCache = []

// Returns an object with one property per file to cache, where the key is the
// filename with the version added, and the value is the absolute url
// (arr) -> obj
var expectedUrls = function (files) {
  var urlSet = {}
  files.forEach(function (file) {
    urlSet[file + version] = new URL(file, self.location)
  })
  urlsToCache.forEach(function (url) {
    var urlKey = url.split('/')[url.split('/').length - 1]
    urlSet[urlKey + version] = url
  })
  return urlSet
}

// Get only the values of the set of expected cahe urls
// arr
var absoluteUrlsExpected = (function () {
  var urls = []
  var expecteds = expectedUrls(filesToCache)
  for (var urlKey in expecteds) {
    urls.push(expecteds[urlKey])
  }
  return urls
})()

// Return the urls already cached
// (cache) -> Promise
var cachedUrls = function (cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url
    })
  }).then(function (urls) {
    return new Set(urls)
  })
}

self.addEventListener('install', function (e) {
  // console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      // console.log('[ServiceWorker] Caching app shell')
      return cachedUrls(cache).then(function (urls) {
        return Promise.all(
          absoluteUrlsExpected.map(function (expectedUrl) {
            if (!urls.has(expectedUrl)) {
              return cache.add(new Request(expectedUrl, { credentials: 'same-origin' }))
            }
          })
        )
      })
    }).then(function () {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting()
    })
  )
})

self.addEventListener('activate', function (e) {
  // console.log('[ServiceWorker] Activate')
  var setOfExpectedUrls = new Set(absoluteUrlsExpected)
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return caches.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              // console.log('[ServiceWorker] Removing old cache', existingRequest.url)
              return cache.delete(existingRequest)
            }
          })
        )
      })
    }).then(function () {
      return self.clients.claim()
    })
  )
})

self.addEventListener('fetch', function (e) {
  if (e.request.method === 'GET') {
    // console.log('[ServiceWorker] Fetch', e.request.url)
    // var dataUrl = 'https://sw-test-43ffd.firebaseio.com/'
    // if (e.request.url.indexOf(dataUrl) === 0) {
    e.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache.match(e.request.url).then(function (response) {
          if (response) {
            return response
          }
          throw Error('The cached response that was expected is missing.')
        })
      }).catch(function (err) {
        // Fall back to just fetch()ing the request if some unexpected error
        // prevented the cached response from being valid.
        console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, err)
        return fetch(e.request)
      })
    )
  }
})
