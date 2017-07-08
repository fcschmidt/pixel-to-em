var cacheName = 'v1';

// Install the ServiceWorker
self.addEventListener('install', function(event) {
    event.waitUntil(
        // Open a cache
        caches.open(cacheName).then(function(cache) {
            // Define  what we want to cache
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/assets/images/icons/favicon.opng',
                '/assets/css/main.css',
                '/assets/js/main.js',
                '/assets/js/app.js',
                '/assets/images/icons/icon-48.png',
                // '/assets/images/icons/icon-96.png',
                '/assets/images/icons/icon-144.png',
                '/assets/images/icons/icon-192.png',
                // '/assets/images/icons/icon-256.png',
                '/assets/vendor/materialize/css/materialize.min.css',
                '/assets/vendor/materialize/js/materialize.min.js',
                '/assets/vendor/materialize/icons/material.css',
                '/assets/vendor/materialize/icons/MaterialIcons-Regular.ttf',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Bold.woff',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Bold.woff2',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Light.woff',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Light.woff2',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Medium.woff',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Medium.woff2',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Regular.woff',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Regular.woff2',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Thin.woff',
                '/assets/vendor/materialize/fonts/roboto/Roboto-Thin.woff2',
                '/assets/vendor/font-awesome/css/font-awesome.min.css',
                '/assets/vendor/waves/css/waves.min.css',
                '/assets/vendor/waves/js/waves.min.js',
                '/assets/vendor/jquery/jquery.min.js'
                // '/offline.html'
            ]);
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).catch(function() {
        return fetch(event.request);
    }).then(function(response) {
        caches.open(cacheName).then(function(cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    })
});
