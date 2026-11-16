/* Parcelle v3 — service worker. Bump CACHE on every release so phones pick up the new files. */
const CACHE = "parcelle-v3.1.0";
const FILES = ["./", "index.html", "manifest.webmanifest", "data/guide.json", "photos/credits.json",
  "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("parcelle-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Same-origin GET only: answer from cache at once (works offline), refresh the cache in the background. */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true});
    const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
    return hit || (await net) || new Response("Hors ligne", {status: 503, headers: {"content-type": "text/plain; charset=utf-8"}});
  }));
});
