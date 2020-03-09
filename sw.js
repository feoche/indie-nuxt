importScripts('/indie-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/indie-nuxt/_nuxt/33ea6b29545eaed1be83.js",
    "revision": "6bc2be44e22304dabe7889091efb47c7"
  },
  {
    "url": "/indie-nuxt/_nuxt/4b1abca6ef87eed88f95.js",
    "revision": "bb786847754d47c5301fe930ecf6f7a1"
  },
  {
    "url": "/indie-nuxt/_nuxt/61dae35b7bd8319ba2ce.js",
    "revision": "a37686d5f78d765c12be77bce55cd872"
  },
  {
    "url": "/indie-nuxt/_nuxt/724a020934cd050881aa.js",
    "revision": "aa8e595d9ee958129a41cf66c415be9a"
  },
  {
    "url": "/indie-nuxt/_nuxt/be881d8dbd9449998bfc.js",
    "revision": "40a1c59bc77ac21cea8bbffe29617b69"
  },
  {
    "url": "/indie-nuxt/_nuxt/c1f8a44330090f0a0ced.js",
    "revision": "eca7ebc63a3645f562abaac8c9424b34"
  }
], {
  "cacheId": "indie-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/indie-nuxt/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/indie-nuxt/.*'), workbox.strategies.networkFirst({}), 'GET')
