/* Ponche · Mayagüez Academy — service worker
   Guarda la app en el equipo para que abra sin internet.
   Sube el número de CACHE cada vez que cambies index.html. */
const CACHE = 'ponche-ma-v4';

/* Todo es del mismo sitio a proposito: el lector de QR va dentro de index.html,
   asi que la app no depende de ningun CDN ni de la red de la escuela. */
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(CORE.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Documento: primero la red, y si no hay, la copia guardada.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put(req, c)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Todo lo demás: primero la copia guardada.
  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(r => {
        if (r && r.status === 200 && (r.type === 'basic' || r.type === 'cors')) {
          const c = r.clone();
          caches.open(CACHE).then(k => k.put(req, c));
        }
        return r;
      }).catch(() => new Response('', { status: 504 }));
    })
  );
});
