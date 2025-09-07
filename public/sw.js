// minimal no-op service worker so registration doesn't 404
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
