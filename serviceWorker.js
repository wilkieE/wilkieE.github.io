const staticEjirogheneData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/pdf/Ejiroghene-resume.pdf",
  "/assets/img/blob.svg",
  "/assets/img/ejiro-old-building.jpg",
  "/assets/img/ejiro-cafe.png",
  "/assets/img/ejiro-suit.jpg",
  "/assets/img/skills/nextjs.svg",
  "/assets/img/skills/vue.svg",
  "/assets/img/skills/react.svg",
  "/assets/img/skills/typescript.svg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/css.svg",
  "/assets/img/skills/tailwind.svg",
  "/assets/img/skills/firebase.svg",
  "/assets/img/portfolio/def-Electronics-screenshot.png",
  "/assets/img/portfolio/sendAmGo-screenshot.png",
  "/assets/img/portfolio/doctorsround-screenshot.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticEjirogheneData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
