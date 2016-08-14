var cacheName = 'cache-v1';
var pathsToCache = [
    '/',
    '/static/styles.css',
    '/static/scripts.js'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(pathsToCache);
        }).catch(function(error) {
            console.error('Oops, something bad happened!', error);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        fetch(e.request).catch(function() {
            return caches.open(cacheName).then(function(cache) {
                return cache.match(e.request);
            })
        })
    );
});
