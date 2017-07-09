var cacheName = 'v1';

// Install the ServiceWorker
self.addEventListener('install', function(event) {
    event.waitUntil(
        // Open a cache
        caches.open(cacheName).then(function(cache) {
            // Define  what we want to cache
            return cache.addAll([
                '/',
                'index.html',
                'offline.html',
                'calc.html',
                'featured.html',
                'manifest.json',
                'assets/images/icons/favicon.opng',
                'assets/css/main.css',
                'assets/js/main.js',
                'assets/js/app.js',
                'assets/images/icons/icon-48.png',
                // '/assets/images/icons/icon-96.png',
                'assets/images/icons/icon-144.png',
                'assets/images/icons/icon-192.png',
                // '/assets/images/icons/icon-256.png',
                'assets/vendor/materialize/css/materialize.min.css',
                'assets/vendor/materialize/js/materialize.min.js',
                'assets/vendor/materialize/icons/material.css',
                'assets/vendor/materialize/icons/MaterialIcons-Regular.ttf',
                'assets/vendor/font-awesome/css/font-awesome.min.css',
                'assets/vendor/waves/css/waves.min.css',
                'assets/vendor/waves/js/waves.min.js',
                'assets/vendor/jquery/jquery.min.js'
            ]);
        })
    );
});


// self.addEventListener('fetch', function(event) {
//     event.respondWith(caches.match(event.request).catch(function() {
//         return fetch(event.request);
//     }).then(function(response) {
//         caches.open(cacheName).then(function(cache) {
//             cache.put(event.request, response);
//         });
//         return response.clone();
//     }).catch(function() {
//         return caches.match('offline.html');
//     }));
// });


self.addEventListener('fetch', function(event) {

  event.respondWith(
    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {

      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});