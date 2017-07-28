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
            return self.skipWaiting();
        })
    );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
            console.log(
                '[fetch] Returning from Service Worker cache: ',
                event.request.url
          );
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});


self.addEventListener('activate', function(event){
    console.log('[activate] Activating service worker!');

    var cacheWhitelist = 'pages-cache-v1';

    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.map(function(cacheName){
                    if (cacheWhitelist.indexOf(cacheName) == -1){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


// self.addEventListener('activate', function(event){
//     console.log('[activate] Activating service worker!');
//     event.waitUntil(
//         caches.keys().then(function(cacheNames){
//             Promise.all(
//                 cacheNames.map(function(key){
//                     if (key !== CACHE_NAME){
//                         console.log('[Service Worker] Removing old cache ', key);
//                         return caches.delete(key);
//                     }
//                 })
//             );
//         })
//     );
// });


// Test push notication
self.addEventListener('push', function(event){
    event.waitUntil(
        getMessageDetails()
        .then(function(details){
            self.registration.showNotification(details.title,{
                body: details.message,
                icon: "/assets/images/icons/icon-192.png"
            })
        })
    );
});


self.addEventListener('notificationclick', function(event){
    console.log('On notification click: ', event);
    clients.openWindow('/');
});