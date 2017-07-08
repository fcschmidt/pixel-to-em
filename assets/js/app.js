// Register the service worker
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/assets/js/sw.js', {scope: '/assets/js/sw.js'})
    .then(function(reg) {

        if(reg.installing) {
            console.log('Service worker installing ' + reg.scope);
        } else if(reg.waiting) {
            console.log('Service worker installed ' + reg.scope);
        } else if(reg.active) {
            console.log('Service worker active at Scope is ' + reg.scope);
        }
    }).catch(function(error) {
        // Registration failed
        console.log('Registration failed with ' + error);
    });
}