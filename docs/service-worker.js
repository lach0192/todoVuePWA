importScripts("/todoVuePWA/precache-manifest.8be4cb4267d8fd126a632c07b403be10.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);

    //workbox.precaching.precacheAndRoute(self.__precacheManifest);
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    // install new service worker when ok, then reload page
    self.addEventListener("message", msg=> {
        if(msg.data.action == 'skipWaiting') {
            self.skipWaiting();
        }
    });

    importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
    firebase.initializeApp({
        messagingSenderId: "424022523433"
    });
    const messaging = firebase.messaging();

} 
else {
    console.log(`Workbox didn't load`);
}
