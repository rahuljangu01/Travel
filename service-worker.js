const CACHE_NAME = "travel-cache-v1";

const urlsToCache = [
"./",
"./index.html",
"./style.css",
"./script.js"
];

// INSTALL EVENT
self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME).then(cache => {
console.log("Files Cached");
return cache.addAll(urlsToCache);
})

);

});

// FETCH EVENT
self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request).then(response => {
return response || fetch(event.request);
})

);

});
