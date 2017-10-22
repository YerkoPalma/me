importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "bundle.css",
    "revision": "363b9c34fd2e74999e27441d708640cb"
  },
  {
    "url": "bundle.js",
    "revision": "43b1f58e3cea348be937b62e4b615557"
  },
  {
    "url": "favicon.ico",
    "revision": "a2a3c39bd4d54e7383c6cc6ff5158f67"
  },
  {
    "url": "index.html",
    "revision": "39b2be2961764b6ad48e14005ec62b7a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
