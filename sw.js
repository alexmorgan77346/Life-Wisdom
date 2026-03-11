const CACHE_NAME = 'life-wisdom-v4';

// Derive base from SW location — works regardless of which folder is served
const BASE = self.location.href.replace('sw.js', '');

const ASSETS = [
  BASE + 'index.html',
  BASE + 'style.css',
  BASE + 'app.js',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png'
];

// Install — use allSettled so one miss doesn't kill the whole install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache =>
        Promise.allSettled(
          ASSETS.map(url =>
            cache.add(url).catch(e => console.warn('[SW] skip:', url, e.message))
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

// Activate — clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

// Fetch — cache first, network fallback, clone BEFORE consuming
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          // Only cache valid same-origin responses
          if (
            !response ||
            response.status !== 200 ||
            (response.type !== 'basic' && response.type !== 'cors')
          ) {
            return response;
          }
          // ✅ Clone FIRST — never read body twice
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return response;
        })
        .catch(() => {
          // Offline fallback for page navigation
          if (event.request.mode === 'navigate') {
            return caches.match(BASE + 'index.html');
          }
        });
    })
  );
});
