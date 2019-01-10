importScripts("/todoVuePWA/precache-manifest.a17ffd2d391f6c013650ad3afb14c5bc.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);

    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    // install new service worker when ok, then reload page
    self.addEventListener("message", msg=> {
        if(msg.data.action == 'skipWaiting') {
            self.skipWaiting();
        }
    });
} 
else {
    console.log(`Workbox didn't load`);
}

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "424022523433"
});

const messaging = firebase.messaging();

// works with test push from chrome devtools
self.addEventListener('push', (event) => {
    const title = 'push event!';
    const options = {
        body: event.data.text()
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
