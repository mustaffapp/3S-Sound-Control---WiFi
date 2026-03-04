const CACHE_NAME = '3s-sound-v2';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './3S_logo.png',
  './speaker_icon.png',
  './light_icon.png',
  './system_icon.png',
  './settings_icon.png',
  './con_icon.png',
  './note_bg.jpg',
  './myFont.otf'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
