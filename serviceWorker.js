const staticBlog = "Lux Blogs";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/dev.png",
  "/images/pro.png",
  "/images/python.png",
  "/images/python_ff.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticBlog ).then(cache => {
      cache.addAll(assets);
    })
  );
});


self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});