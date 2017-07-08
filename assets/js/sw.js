// Use a cacheName for cache versioning
var cacheName = 'v1:static';

// During the installation phase, you'll usually want to cache static assets.
// Install the ServiceWorker
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        // Open a cache
        caches.open(cacheName).then(function(cache) {
            // Define  what we want to cache
            return cache.addAll([
                "index.html",
                "manifest.json",
                "assets/css/main.cs",
                "assets/js/main.js",
                "assets/image/icons/launcher-icon.png",
                "assets/image/icons/launcher-icon-96.png",
                "assets/image/icons/launcher-icon-144.png",
                "assets/image/icons/launcher-icon-192.png",
                "assets/image/icons/launcher-icon-256.png",
                "assets/vendor/jquery.min.js",
                "assets/vendor/materialize/css/materialize.min.css",
                "assets/vendor/materialize/js/materialize.min.js",
                "assets/vendor/materialize/icons/material.css",
                "assets/vendor/materialize/icons/MaterialIcons-Regular.ttf",
                "assets/vendor/waves/css/waves.min.css",
                "assets/vendor/waves/js/waves.min.js",
                "assets/vendor/font-awesome/css/font-awesome.min.css",
                "offline.html"
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});