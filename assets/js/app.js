// Register the service worker
// if ('serviceWorker' in navigator) {

//     navigator.serviceWorker.register('service-worker.js')
//     .then(function(reg) {
//         if(reg.installing) {
//             console.log('Service worker installing!');
//         } else if(reg.waiting) {
//             console.log('Service worker installed!');
//         } else if(reg.active) {
//             console.log('Service worker active!', reg);
//         }
//     }).catch(function(error) {
//         console.log('Registration failed with ' + error);
//     });
// }


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(reg) {
            // Registration was successful
            console.log("ServiceWorker registration successful with scope: ", reg.scope);
        }, function(error){
            // Registration failed
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}