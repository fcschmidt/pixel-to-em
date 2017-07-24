var CACHE_NAME = 'v1';


self.addEventListener('install', function(event) {
    console.log('[install] kicking off service worker registration!');
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return fetch('files-to-cache.json').then(function(response){
                return response.json();
            }).then(function(files){
                console.log('[install] Adding files from JSON file: ', files);
                return cache.addAll(files);
            });
        }).then(function () {
            console.log(
                '[install] All required resources have been cached;',
                'the Service Worker was successfully installed!'
            );
            self.skipWaiting();
        })
    );
});


self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request)
      .then(function(response){
        // Cache hit - return the response from the cached version
        if (response){
          console.log(
            '[fetch] Returning from Service Worker cache: ',
            event.request.url
          );
          return response;
        }

        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        console.log('[fetch] Returning from server: ', event.request.url);
        return fetch(event.request);
      }
    )
  );
});


self.addEventListener('activate', function(event){
    console.log('[activate] Activating service worker!');
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.map(function(cacheName){
                    if (CACHE_NAME.indexOf(cacheName) == -1){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


self.addEventListener('notificationclick', function(event){
    console.log('On notification click: ', event);
    clients.openWindow('/');
});