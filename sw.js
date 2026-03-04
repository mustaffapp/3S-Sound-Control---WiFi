const cacheName = '3s-sound-v1';
const assets = [
  './',
  './index.html',
  './myFont.otf',
  './3S_logo.png',
  './speaker_icon.png',
  './light_icon.png',
  './system_icon.png',
  './con_icon.png',
  './settings_icon.png',
  './note_bg.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});