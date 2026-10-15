// Service Worker para Inglés Sara PWA - Optimizado para GitHub Pages
const CACHE_NAME = 'ingles-sara-v2';

// Lista de recursos con rutas relativas
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

// Instalación: cachear cada recurso resolviendo la URL relativa a self.location
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Pre-caching offline assets for GitHub Pages');
      for (const asset of ASSETS_TO_CACHE) {
        try {
          const resolvedUrl = new URL(asset, self.location).href;
          await cache.add(resolvedUrl);
        } catch (err) {
          console.warn('[SW] Could not pre-cache:', asset, err);
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

  // Nunca cachear llamadas a la API de Gemini ni peticiones que no sean GET
  if (url.href.includes('generativelanguage.googleapis.com') || event.request.method !== 'GET') {
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

  // Recursos estáticos (estilos, iconos, scripts, fuentes)
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        // En segundo plano intentamos actualizar la caché si hay conexión
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => { /* Modo offline seguro */ });
        return cachedResponse;
      }

      // Si no estaba en caché, pedir a la red y almacenar
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        return null;
      });
    })
  );
});
