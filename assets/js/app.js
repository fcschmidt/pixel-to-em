// Register the service worker
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('assets/js/sw.js')
    .then(function(reg) {

        if(reg.installing) {
            console.log('Service worker installing!');
        } else if(reg.waiting) {
            console.log('Service worker installed!');
        } else if(reg.active) {
            console.log('Service worker active!');
        }
    }).catch(function(error) {
        // Registration failed
        console.log('Registration failed with ' + error);
    });
} else {
    console.log("Your browser does not supports serviceWorker!");
}