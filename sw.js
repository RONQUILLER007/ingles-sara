// Service Worker para Inglés Sara PWA - Optimizado para GitHub Pages y 100% Offline real
const CACHE_NAME = 'ingles-sara-v23';

// Lista de recursos locales con rutas relativas
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/contexto.js',
  './js/exam-bank.js',
  './js/storage.js',
  './js/audio.js',
  './js/gemini.js',
  './js/app.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Recursos externos esenciales para mantener estilos y tipografía sin conexión (incluyendo opaque)
const EXTERNAL_ASSETS_TO_CACHE = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap'
];

const TRUSTED_EXTERNAL_ORIGINS = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

// Instalación: cachear recursos locales y externos esenciales (tolerando respuestas opaque)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Pre-caching fresh offline assets for GitHub Pages:', CACHE_NAME);
      for (const asset of ASSETS_TO_CACHE) {
        try {
          const resolvedUrl = new URL(asset, self.location).href;
          await cache.add(new Request(resolvedUrl, { cache: 'reload' }));
        } catch (err) {
          console.warn('[SW] Could not pre-cache:', asset, err);
        }
      }

      for (const extUrl of EXTERNAL_ASSETS_TO_CACHE) {
        try {
          let extRes;
          try {
            extRes = await fetch(new Request(extUrl, { mode: 'cors', cache: 'reload' }));
          } catch (corsErr) {
            extRes = await fetch(new Request(extUrl, { mode: 'no-cors' }));
          }
          if (extRes && (extRes.ok || extRes.type === 'opaque')) {
            await cache.put(extUrl, extRes);
          }
        } catch (err) {
          console.warn('[SW] Could not pre-cache external asset:', extUrl, err);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// Activación: limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: interceptar y responder
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Peticiones de red que no sean GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Peticiones de navegación (cuando el usuario entra o recarga en la tablet)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(async () => {
        // Fallback offline a index.html
        const indexUrl = new URL('./index.html', self.location).href;
        const cachedIndex = await caches.match(indexUrl);
        if (cachedIndex) return cachedIndex;
        const cachedRoot = await caches.match(new URL('./', self.location).href);
        if (cachedRoot) return cachedRoot;
        return caches.match('index.html');
      })
    );
    return;
  }

  // Recursos estáticos (estilos, iconos, scripts, fuentes y CDN externos confiables)
  const isTrustedExternal = TRUSTED_EXTERNAL_ORIGINS.includes(url.origin);

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        // En segundo plano intentamos actualizar la caché si hay conexión
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || (isTrustedExternal && networkResponse.type === 'opaque'))) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => { /* Modo offline seguro */ });
        return cachedResponse;
      }

      // Si no estaba en caché, pedir a la red y almacenar (incluidas respuestas opaque de CDN confiables)
      return fetch(event.request).then((networkResponse) => {
        const isCacheable = networkResponse && (
          networkResponse.status === 200 ||
          (isTrustedExternal && networkResponse.type === 'opaque')
        );
        if (!isCacheable) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        return Response.error();
      });
    })
  );
});
