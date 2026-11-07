// 测试专用：零缓存 Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 强制立即激活新版本
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      // 删除所有旧的缓存
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => self.clients.claim()) // 立即接管页面
  );
});

self.addEventListener('fetch', (event) => {
  // 什么都不拦截，所有请求直接走网络，保证获取最新代码
  return;
});
