importScripts("/todoVuePWA/precache-manifest.86a78bb2d5c1f176bfab7f7069b73505.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

} 
else {
    console.log(`Workbox didn't load`);
}
