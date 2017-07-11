var cacheName = 'v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'offline.html',
                'calc.html',
                'featured.html',
                'manifest.json',
                'assets/css/main.css',
                'assets/js/main.js',
                'assets/js/app.js',
                'assets/images/icons/favicon.png',
                'assets/images/icons/icon-48.png',
                'assets/images/icons/icon-144.png',
                'assets/images/icons/icon-192.png',
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


self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request).then(function(response){
                return caches.open(cacheName).then(function(cache){
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        }).catch(function(){
            return caches.match('offline.html');
        })
    );
});


self.addEventListener('active', function(event){
    var cachWhitelist = ['v2'];

    event.waitUntil(
        caches.keys().then(function(keyList){
            return Promise.all(keyList.map(function(key){
                if (cacheWhitelist.indexOf(key) === -1){
                    console.log('[SW] Delete cache:', cacheName);
                    return caches.delete(key);
                }
            }));
        })
    );
});


self.addEventListener('notificationclick', function(event){
    console.log('On notification click: ', event);
    clients.openWindow('/');
});