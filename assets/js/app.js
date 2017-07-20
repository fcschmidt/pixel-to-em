// Register the service worker
// Offline Tests
// if ('serviceWorker' in navigator && (window.location.protocol == 'https:' || window.location.hostname === 'localhost')) {
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('service-worker.js',{
        scope: ''
    }).then(function(reg) {
        if(reg.installing) {
            console.log('Service worker installing!');
        } else if(reg.waiting) {
            console.log('Service worker installed!');
        } else if(reg.active) {
            console.log('Service worker active!', reg);
        }
    }).catch(function(error) {
        console.log('Registration failed with ' + error);
    });
}