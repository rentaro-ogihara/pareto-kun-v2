// パレート君 Service Worker
// 画面（index.html）はネット優先で最新版を取得し、オフライン時は保存済みの版を使います。
// ツールを更新したら VERSION の数字を上げてください。
const VERSION = 'pareto-kun-v5';
const ASSETS = [
  './',
  'index.html',
  'chart.umd.min.js',
  'manifest.webmanifest',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'maskable-512.png'
];

self.addEventListener('install', e => {
  // 1つ取得できなくても他は保存できるよう、1ファイルずつ保存します
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); return res; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
