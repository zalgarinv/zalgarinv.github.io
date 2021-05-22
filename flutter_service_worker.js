'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/1.jpg": "37bf9be3d9c654cd00f2467d987909d7",
"assets/2.jpg": "6b607be93a43000040bbf77d8979751b",
"assets/3.jpg": "6a022ed92e40c9dc65e9473bef230029",
"assets/5.jpg": "9995ee98d4078643079124f22dd62214",
"assets/6.jpg": "1733955b5a77eb895972b0c55b2c9212",
"assets/about-me.jpg": "ce461bece9fc1f9952972789d1b25892",
"assets/academic_me.jpg": "c745692417b5f45733d0f00662eee4af",
"assets/AssetManifest.json": "ca1ab7f1aafd8e63a6f0f65159386da1",
"assets/beplus.jpg": "3bd4bd7f7d04758999ab07993dd4fc10",
"assets/carolsdaughter.png": "dc9014634b63ead19a058a9d4a214118",
"assets/covergirl.png": "ecbba65116968d45b01d1328cdf9dccf",
"assets/experience_me.jpg": "13b91f3e07198e12185c10965b2bc5db",
"assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/FontManifest.json": "03e978597595c9c07b723524749a6d69",
"assets/fonts/GoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/gmail.png": "acfe88d1c83f1207ca2484f9fba12fa8",
"assets/gomba.jpg": "5b8c4c93c513151d477ec4436f1d311b",
"assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/kristal.jpg": "5f0ab117470932df904b259a48bd7ee9",
"assets/logo.jpg": "aecfacdbcc3065af3a7d77c4a60f84e9",
"assets/maybelline.png": "f60d7061064fda67018194833ac6a5d1",
"assets/newspaper.jpg": "649f63a0f7fdf245c06ee250dffcfb0f",
"assets/newspaper2.jpg": "6477a94e63823579ed8ee8bc15fc27b5",
"assets/NOTICES": "b382ebb271e681977abc897c49afda5d",
"assets/piso13.png": "b27cdb2c5b78edbde37fa30cd6d1fb01",
"assets/usc.png": "efdfa97d16abc55ccad00985882ee492",
"assets/web%255Cassets%255C1.jpg": "37bf9be3d9c654cd00f2467d987909d7",
"assets/web%255Cassets%255C2.jpg": "6b607be93a43000040bbf77d8979751b",
"assets/web%255Cassets%255C3.jpg": "6a022ed92e40c9dc65e9473bef230029",
"assets/web%255Cassets%255C5.jpg": "9995ee98d4078643079124f22dd62214",
"assets/web%255Cassets%255C6.jpg": "1733955b5a77eb895972b0c55b2c9212",
"assets/web%255Cassets%255Cabout-me.jpg": "ce461bece9fc1f9952972789d1b25892",
"assets/web%255Cassets%255Cacademic_me.jpg": "c745692417b5f45733d0f00662eee4af",
"assets/web%255Cassets%255Cbeplus.jpg": "3bd4bd7f7d04758999ab07993dd4fc10",
"assets/web%255Cassets%255Ccarolsdaughter.png": "dc9014634b63ead19a058a9d4a214118",
"assets/web%255Cassets%255Ccovergirl.png": "ecbba65116968d45b01d1328cdf9dccf",
"assets/web%255Cassets%255Cexperience_me.jpg": "13b91f3e07198e12185c10965b2bc5db",
"assets/web%255Cassets%255Cfacebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/web%255Cassets%255Cfonts%255CGoogleSans-Regular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/web%255Cassets%255Cgmail.png": "acfe88d1c83f1207ca2484f9fba12fa8",
"assets/web%255Cassets%255Cgomba.jpg": "5b8c4c93c513151d477ec4436f1d311b",
"assets/web%255Cassets%255Cinstagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/web%255Cassets%255Ckristal.jpg": "5f0ab117470932df904b259a48bd7ee9",
"assets/web%255Cassets%255Clogo.jpg": "aecfacdbcc3065af3a7d77c4a60f84e9",
"assets/web%255Cassets%255Cmaybelline.png": "f60d7061064fda67018194833ac6a5d1",
"assets/web%255Cassets%255Cnewspaper.jpg": "649f63a0f7fdf245c06ee250dffcfb0f",
"assets/web%255Cassets%255Cnewspaper2.jpg": "6477a94e63823579ed8ee8bc15fc27b5",
"assets/web%255Cassets%255Cpiso13.png": "b27cdb2c5b78edbde37fa30cd6d1fb01",
"assets/web%255Cassets%255Cusc.png": "efdfa97d16abc55ccad00985882ee492",
"index.html": "d33be69e2b9ac317e5df43e3b05ce949",
"/": "d33be69e2b9ac317e5df43e3b05ce949",
"main.dart.js": "c3fa9ecaf70ec0dfb78ea2e6cb19bd24",
"manifest.json": "cca295e5aea87460eb018e9f99807d59",
"version.json": "d4dad6ca50fb1e75163bc9b367e12a5c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
