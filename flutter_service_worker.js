'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/config": "c1bde5a886e787296c71c2eef8e58aab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4fab5a44e84a07df457ed574263638f5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6acc661b716bda9f2c79a3ab65908c1",
".git/logs/refs/heads/main": "d6acc661b716bda9f2c79a3ab65908c1",
".git/logs/refs/remotes/gh/main": "453c850ae176878599e3e263db1647bb",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/29/c4baa4af9370d5d1f74cd2006570c9ebb6b589": "ec10428e54d1ae294124714e943e929d",
".git/objects/30/792e6de819ed02570bc175f12f4cf31b974242": "1f3b45ba8f033b0f2f6ce6f3b3d591ca",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/14352d3d1499b0778b80446c7c199c30ea5fdb": "b8c9ece5c9d1d889e338642df0d266c6",
".git/objects/5c/863857e04bd893bd3e79ce3536d6b27bef9199": "4613fd91f6eba7868da99e0cbbe97345",
".git/objects/73/8bdcd99149a38b1f359ae5b74319cafe1369ef": "d94f88f5eb1916cacc38acf096382183",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/dce3ff847eb2135410449d3d184409db8d6304": "18a86742e58f2d069464169dc9356eeb",
".git/objects/8b/aaf070b6a6be4dc386c9792c6197562b97707c": "65e71cdbf3a34ebbb5826ed19ed84812",
".git/objects/8b/dfd052378a597721c66783a97b85346887616d": "82b33875eb33d36b8a2d0d38dcc0ae11",
".git/objects/99/bffca37a3ce00badddb9855147bf23a487d381": "0f89f52d1fb770693663ca9d4b7714fa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/b26d6278c07298c45614e90e3c9f4e8593bd96": "6fd7a46a7592cc521058225b99a575bb",
".git/objects/b3/73c8fd35a6f95331d8c5c02228a12065600332": "30fea961ea379e1f2db44aec86eb75f2",
".git/objects/bf/c714f458a4847c4c46670cec0cf46d884b7d3f": "7fd8c53ca8f7c2ee0f734e701f2b21df",
".git/objects/c5/903e2b4c3bea93c71c6b4d743fb9d9b08e6d92": "d6ad6d82065b3af23f88cc12f65e4b45",
".git/objects/c7/162430a1fcee4f3521f40e8d044905587fcd91": "adda00dad41c6d87e4c9fb916b94dc25",
".git/objects/ca/2909695160d451550b42ef55b4031db7abcaba": "caf0bc269fa0140b9d92d42200ed90c2",
".git/objects/e3/9d4fee38f9e9ca413843a5f3c902bba09c045f": "d19572fd5298a85cd1a376568107735d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/4bf38c3311de12a0aea93f310981b81e7b5f4a": "d7ccf5ed144896fc966902a7acd65a8a",
".git/objects/e9/fdb3e2dae86d235427365997692dca5d708585": "ec8cc2f33f4bf8c50bf4c6c810a07901",
".git/objects/f2/e0dac6b9adffba96ae7c61e6195861854c2fae": "297afca5d133836c2334f3f0f5c6d1f6",
".git/refs/heads/main": "7d054a261bb9ec150b607f08a056c8a9",
".git/refs/remotes/gh/main": "7d054a261bb9ec150b607f08a056c8a9",
"assets/AssetManifest.json": "38578f28b7e8e59b4862d146fc072b96",
"assets/assets/images/background_placeholder.png": "02b1f7c8e95f1d6a069740f2bc938ee8",
"assets/assets/images/logo.svg": "46081a478999aca3a878b11f74c5b9b1",
"assets/assets/riv/dndman_logo.riv": "dca94685c201f7080efceb7a3e743c29",
"assets/FontManifest.json": "337f0f72e8e960b8dfc77bd8036a958e",
"assets/fonts/DNDManIcons.ttf": "52a9be5bb60e3bd2d191c7a798326547",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "95bea98935e8a98bc295317fe47fcfa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.svg": "46081a478999aca3a878b11f74c5b9b1",
"index.html": "4147c7552a3666a4974653e6df3c1c6e",
"/": "4147c7552a3666a4974653e6df3c1c6e",
"main.dart.js": "bdf9e395c136377b537295c0476a1423",
"manifest.json": "b04f2452111e4a13984035e5440429da",
"version.json": "fe3ceaefacf18a9e3eb8ad28febc8ca9"
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
