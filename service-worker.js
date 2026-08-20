// Minimal service worker — just enough to make the app installable.
// Not doing offline caching here since this tool needs a live connection
// to the Sheet backend to log runs and read the leaderboard anyway.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass everything straight through to the network.
  event.respondWith(fetch(event.request));
});
