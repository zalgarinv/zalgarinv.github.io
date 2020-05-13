'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/1.jpg": "f9150ac4d9b0e9534efb9dd2d4461cee",
"assets/2.jpg": "6fef4e64f525f9040ea321d3a465f3aa",
"assets/3.jpg": "1967e8918a3a479293e1107642e8314f",
"assets/5.jpg": "220f9ee69bffcd721e20cee2d1d36201",
"assets/6.jpg": "c1337b2c24a66dd2442779acf8bd4047",
"assets/about-me.jpg": "4c9acc394a38274f006515f1dbf61030",
"assets/academics_me.jpg": "5d857ed3e2249f7b67d473b9c283aa37",
"assets/AssetManifest.json": "6787ff247cd0eb1d8c07038f0cb93b91",
"assets/beplus.jpg": "3bd4bd7f7d04758999ab07993dd4fc10",
"assets/carolsdaughter.png": "dc9014634b63ead19a058a9d4a214118",
"assets/covergirl.png": "ecbba65116968d45b01d1328cdf9dccf",
"assets/experience_me.jpg": "4981cef0fab1d7340c93de1169cb9f25",
"assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/FontManifest.json": "30fe3e48f8094cecf84a92f20910496b",
"assets/fonts/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/gmail.png": "acfe88d1c83f1207ca2484f9fba12fa8",
"assets/gomba.jpg": "5b8c4c93c513151d477ec4436f1d311b",
"assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/kristal.jpg": "5f0ab117470932df904b259a48bd7ee9",
"assets/LICENSE": "10240448bcf9231048a0ac2e2f5045a7",
"assets/logo.jpg": "aecfacdbcc3065af3a7d77c4a60f84e9",
"assets/maybelline.png": "f60d7061064fda67018194833ac6a5d1",
"assets/newspaper.jpg": "106a0c831e579f4a601a27315f427bb5",
"assets/newspaper2.jpg": "1380dc49cab175abd5f3926d64159a54",
"assets/piso13.png": "b27cdb2c5b78edbde37fa30cd6d1fb01",
"assets/usc.png": "efdfa97d16abc55ccad00985882ee492",
"assets/web%255Cassets%255C1.jpg": "f9150ac4d9b0e9534efb9dd2d4461cee",
"assets/web%255Cassets%255C2.jpg": "6fef4e64f525f9040ea321d3a465f3aa",
"assets/web%255Cassets%255C3.jpg": "1967e8918a3a479293e1107642e8314f",
"assets/web%255Cassets%255C5.jpg": "220f9ee69bffcd721e20cee2d1d36201",
"assets/web%255Cassets%255C6.jpg": "c1337b2c24a66dd2442779acf8bd4047",
"assets/web%255Cassets%255Cabout-me.jpg": "4c9acc394a38274f006515f1dbf61030",
"assets/web%255Cassets%255Cacademics_me.jpg": "5d857ed3e2249f7b67d473b9c283aa37",
"assets/web%255Cassets%255Cbeplus.jpg": "3bd4bd7f7d04758999ab07993dd4fc10",
"assets/web%255Cassets%255Ccarolsdaughter.png": "dc9014634b63ead19a058a9d4a214118",
"assets/web%255Cassets%255Ccovergirl.png": "ecbba65116968d45b01d1328cdf9dccf",
"assets/web%255Cassets%255Cexperience_me.jpg": "4981cef0fab1d7340c93de1169cb9f25",
"assets/web%255Cassets%255Cfacebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/web%255Cassets%255Cfonts%255CGoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/web%255Cassets%255Cgmail.png": "acfe88d1c83f1207ca2484f9fba12fa8",
"assets/web%255Cassets%255Cgomba.jpg": "5b8c4c93c513151d477ec4436f1d311b",
"assets/web%255Cassets%255Cinstagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/web%255Cassets%255Ckristal.jpg": "5f0ab117470932df904b259a48bd7ee9",
"assets/web%255Cassets%255Clogo.jpg": "aecfacdbcc3065af3a7d77c4a60f84e9",
"assets/web%255Cassets%255Cmaybelline.png": "f60d7061064fda67018194833ac6a5d1",
"assets/web%255Cassets%255Cnewspaper.jpg": "106a0c831e579f4a601a27315f427bb5",
"assets/web%255Cassets%255Cnewspaper2.jpg": "1380dc49cab175abd5f3926d64159a54",
"assets/web%255Cassets%255Cpiso13.png": "b27cdb2c5b78edbde37fa30cd6d1fb01",
"assets/web%255Cassets%255Cusc.png": "efdfa97d16abc55ccad00985882ee492",
"index.html": "d33be69e2b9ac317e5df43e3b05ce949",
"/": "d33be69e2b9ac317e5df43e3b05ce949",
"main.dart.js": "cc3f4f0f3fc8f7c4c52e7a5fd6aaafcc",
"manifest.json": "cca295e5aea87460eb018e9f99807d59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
