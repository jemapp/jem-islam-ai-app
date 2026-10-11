const CACHE_NAME = "jem-islam-ai-v1";

const APP_FILES = [
  "/",
  "/index.html",
  "/app.js",
  "/manifest.json",
  "/icons/icon-192.svg",
  "/icons/icon-512.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.all(
        APP_FILES.map(async file => {
          try {
            await cache.add(file);
          } catch (error) {
            console.warn("Could not cache:", file);
          }
        })
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  if (
    request.method !== "GET" ||
    url.origin !== self.location.origin
  ) {
    return;
  }

  // Do not cache AI API requests.
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // For page navigation, try network first.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache =>
              cache.put("/index.html", copy)
            );
          }

          return response;
        })
        .catch(async () => {
          return (
            await caches.match(request) ||
            await caches.match("/index.html") ||
            new Response(
              "You are offline. Please reconnect to the internet.",
              {
                status: 503,
                headers: {
                  "Content-Type": "text/plain; charset=utf-8"
                }
              }
            )
          );
        })
    );

    return;
  }

  // For static files, try cache first.
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache =>
            cache.put(request, copy)
          );
        }

        return response;
      });
    })
  );
});
