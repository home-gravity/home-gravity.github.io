'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "565dec1baef0a09b06614585401ec408",
"assets/AssetManifest.json": "2e2523447587a599fed741be1fc398c9",
"assets/assets/background/background_chosung.png": "3006774bc4b206b7d60c2a149d2b1ea9",
"assets/assets/background/background_line.png": "554b171cc7586f999663cf6176e0f465",
"assets/assets/background/background_stroop.png": "964549f04af73e78c1a5c264ef62b9f2",
"assets/assets/background/background_voca_rp.png": "00a612cb28c0a76f7f400839d5a15466",
"assets/assets/background_story.png": "ee45c879430c4ccb2ee647d36593a2c7",
"assets/assets/chosung.png": "4f6579cf515c6131563fa785806676e4",
"assets/assets/correct.png": "9920934abdc3a44f609cfc2ffe1f3bb2",
"assets/assets/go_with_me.png": "49c4f5e292ee075d7f34637f8da329f4",
"assets/assets/line.png": "dec8fd85419b1873e8215380fc47e557",
"assets/assets/loading.gif": "3b4c0099604ff016ea43a5baddc5ac7d",
"assets/assets/logo.svg": "1ad11c6aa5fec0654a7137cf6bc4bb94",
"assets/assets/okay.png": "6b057c30899bd8554f1128275299a9fd",
"assets/assets/pattern.png": "6ffeebfa50ac775be2988291ceb66ec5",
"assets/assets/Pretendard/Pretendard-Black.otf": "47fbe31c9ec1a228b48323141304e72f",
"assets/assets/Pretendard/Pretendard-Bold.otf": "f3189877761796153110738ae129c8a2",
"assets/assets/Pretendard/Pretendard-ExtraBold.otf": "83090e76856550278a1694bdf48a2db1",
"assets/assets/Pretendard/Pretendard-ExtraLight.otf": "8f1efd7d7991d92aba8d2603456ed570",
"assets/assets/Pretendard/Pretendard-Light.otf": "7074e726e0701102a10f0843961e28b6",
"assets/assets/Pretendard/Pretendard-Medium.otf": "d88ea6aec529d8945a09a582be9200a2",
"assets/assets/Pretendard/Pretendard-Regular.otf": "97b362437880d5cbb01b9305136909ac",
"assets/assets/Pretendard/Pretendard-SemiBold.otf": "0bfe99ca0a0e757d2f997561b4b3a020",
"assets/assets/Pretendard/Pretendard-Thin.otf": "fe5044d0108c234a2a609a17e920781d",
"assets/assets/profile.png": "cd10d08a1f08a146f06f1478a78420e2",
"assets/assets/snail.png": "f6da418a7d0338755d821806bd5209fc",
"assets/assets/snail_rainbow.png": "0e8c742fb7b8b5a8e3303b3711d2a151",
"assets/assets/story.png": "ad58d8cca98c4c4661c1f1fcb925cc53",
"assets/assets/story_sample.mp4": "e963149952de849266e0d581acea87a4",
"assets/assets/story_sample.png": "900492f84d9f9cc08ea4c5f3b53788a8",
"assets/assets/stroop.png": "3b8f278fa5d07d6bef5deca65b216f1c",
"assets/assets/voca_rp.png": "3288d62aad0f3e50e68967273c2764f6",
"assets/assets/what_is_my_dream_color.png": "2ab9317cdc2b34074e7d0804407f86fc",
"assets/assets/xcomment.png": "2485d815a966407cebb6359167e3a2f9",
"assets/FontManifest.json": "737d6c688a047f0ae33218fe5623a4dd",
"assets/fonts/MaterialIcons-Regular.otf": "f22d48633594d498ade39dbea9da6859",
"assets/NOTICES": "776e759d77ec6885752bd9e2ce8adf44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icon.svg": "5857ed12ff88c5aa5ab11c7d10d13c4c",
"index.html": "573bf8566c1985bcecded9b8c726bfea",
"/": "573bf8566c1985bcecded9b8c726bfea",
"main.dart.js": "369bb2961c7803ce9a4e49e0880ca052",
"manifest.json": "ba651b8b7eb43666984a57f3bac7f9b9",
"version.json": "115c531a311020add8abacba85e5cbad"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
