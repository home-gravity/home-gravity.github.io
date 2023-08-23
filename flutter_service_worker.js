'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e7f81e9350647444093aeb6e3c31cb94",
"assets/AssetManifest.json": "f72b41d8cc126d9e6a82860d25fbc55d",
"assets/assets/background/background_chosung.png": "3006774bc4b206b7d60c2a149d2b1ea9",
"assets/assets/background/background_line.png": "554b171cc7586f999663cf6176e0f465",
"assets/assets/background/background_stroop.png": "964549f04af73e78c1a5c264ef62b9f2",
"assets/assets/background/background_voca_rp.png": "00a612cb28c0a76f7f400839d5a15466",
"assets/assets/background_story.png": "ee45c879430c4ccb2ee647d36593a2c7",
"assets/assets/background_video.png": "d52929800e9ee2b74b2abbc006f014b7",
"assets/assets/chosung.png": "4f6579cf515c6131563fa785806676e4",
"assets/assets/chosung.svg": "3e629818a49686f5d92821a81da444b0",
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
"assets/assets/sounds/check.mp3": "73331cf06418667cf9f9c0fc2fc85122",
"assets/assets/sounds/guide/%25EB%2593%25A4%25EB%25A0%25A4%25EC%25A4%2580_%25EB%258B%25A8%25EC%2596%25B4%25EB%25A5%25BC_%25EB%2594%25B0%25EB%259D%25BC_%25EB%25A7%2590%25ED%2595%25B4%25EB%25B3%25B4%25EC%2584%25B8%25EC%259A%2594.wav": "035f58bbd6e8556afa57d93ac58e848b",
"assets/assets/sounds/guide/chosung.wav": "ab3f7a902f52b9a27b902d44f530e875",
"assets/assets/sounds/guide/line.wav": "eda9385e678813ac030ed4e636a5ca2c",
"assets/assets/sounds/guide/repeat.wav": "e4612627bb000d801c11a0f98713da1a",
"assets/assets/sounds/guide/story.wav": "44fff6f5a18dab31bf0188000c00317a",
"assets/assets/sounds/guide/stroop.wav": "9a0015e42b6ecae84a64ef818d4f6025",
"assets/assets/sounds/question.mp3": "7e188ddf73629c1557d8339227de19ad",
"assets/assets/sounds/repeat_test/%25EA%25B0%259C%25EB%25AF%25B8.wav": "c3a76c1f42c5627860346c21bc379bab",
"assets/assets/sounds/repeat_test/%25EA%25B1%25B0%25EB%25AF%25B8.wav": "02292fd6d18b3d153203ba18671c895d",
"assets/assets/sounds/repeat_test/%25EA%25B3%25A0%25EA%25B8%25B0.wav": "6617a8608891ee18a06a72bf26a67466",
"assets/assets/sounds/repeat_test/%25EA%25B3%25BC%25EC%259E%2590.wav": "81da19f04283c72cad0fc60f2df0a8d8",
"assets/assets/sounds/repeat_test/%25EA%25B8%25B0%25EC%25B0%25A8.wav": "4909f2f939876a6ae250d03a5c65373c",
"assets/assets/sounds/repeat_test/%25EB%2582%2598%25EB%25AC%25B4.wav": "be36b2ee178bdb54cd65d2662fc0b7ac",
"assets/assets/sounds/repeat_test/%25EB%2582%2598%25EB%25B9%2584.wav": "08d64b7f0fe3772c83a0a9ec71f1acf6",
"assets/assets/sounds/repeat_test/%25EB%2588%2584%25EB%2582%2598.wav": "a8a18b07a0e06e2c366d7a2047a54f2b",
"assets/assets/sounds/repeat_test/%25EB%25A8%25B8%25EB%25A6%25AC.wav": "e32c4e9d185b194f54c0c5ecb44e568b",
"assets/assets/sounds/repeat_test/%25EB%25AA%25A8%25EC%259E%2590.wav": "56065c63dc443d16ae374f27f67c54ca",
"assets/assets/sounds/repeat_test/%25EB%25AF%25B8%25EB%25A1%259C.wav": "d3c3ded0670d209f9f49292981d898be",
"assets/assets/sounds/repeat_test/%25EB%25B0%2594%25EC%25A7%2580.wav": "4984b1301bc2db4f6d4ba065bf19dec3",
"assets/assets/sounds/repeat_test/%25EC%2582%25AC%25EC%259E%2590.wav": "7da9e744a46283e097c5b24e8624997c",
"assets/assets/sounds/repeat_test/%25EC%258B%259C%25EA%25B3%2584.wav": "64d7ccfe6ab350fa45e3344d93c801ce",
"assets/assets/sounds/repeat_test/%25EC%2598%25A4%25EB%25A6%25AC.wav": "a13ff44be16f9f888e8daf6ee6070789",
"assets/assets/sounds/repeat_test/%25EC%2598%25A4%25EC%259D%25B4.wav": "4a7e5768389592a047c2ac744a4c3b72",
"assets/assets/sounds/repeat_test/%25EC%259E%2590%25EB%259D%25BC.wav": "4f254573d0f8e924c62079caeb49c166",
"assets/assets/sounds/repeat_test/%25EC%25B9%25B4%25EB%2593%259C.wav": "80461ed37d9cedf60162a1b7daf7434f",
"assets/assets/sounds/story_test/%25EC%2598%2581%25EC%2583%2581%25EC%259D%2584_%25EB%25B3%25B4%25EA%25B3%25A0_%25EC%259D%25B4%25EC%2595%25BC%25EA%25B8%25B0%25EB%25A5%25BC_%25EB%2582%2598%25EB%2588%25A0%25EB%25B4%2590%25EC%259A%2594.wav": "360465ff151bf6a2011cfa32a655e4b7",
"assets/assets/sounds/story_test/%25EC%25A0%2595%25EB%258B%25B5%25EC%259D%2584_%25EB%25A7%2590%25ED%2595%25B4%25EC%25A3%25BC%25EC%2584%25B8%25EC%259A%2594.wav": "543d382ca83fbc65bdbe61c11fb5b338",
"assets/assets/sounds/story_test/%25EC%25A2%2585%25EB%25A3%258C%25ED%2595%2598%25EA%25B8%25B0_%25EB%25B2%2584%25ED%258A%25BC%25EC%259D%2584_%25EB%2588%2584%25EB%25A5%25B4%25EB%25A9%25B4_%25EA%25B2%258C%25EC%259E%2584%25EC%259D%2584_%25EB%25A7%2588%25EB%25AC%25B4%25EB%25A6%25AC%25ED%2595%25A0_%25EC%2588%2598_%25EC%259E%2588%25EC%2596%25B4%25EC%259A%2594.wav": "4b7f64f56bb3993b96c4c8e5266696a1",
"assets/assets/sounds/story_test/endbubble01.wav": "5a10ef6b45b6f917b83ea7ab273f2653",
"assets/assets/sounds/story_test/endbubble02.wav": "c7d2d0627eba4ea8ca1b87c69d341e3b",
"assets/assets/sounds/story_test/startbubble01.wav": "c29cb905570eca0ceeb76e150622d16e",
"assets/assets/sounds/story_test/startbubble02.wav": "080e27db923dcc6bb01a2623b76fe35d",
"assets/assets/sounds/story_test/startbubble03.wav": "a6d321c54f99c2d820960b0600ccde70",
"assets/assets/sounds/test_name/chosung.wav": "978644ef3f683f168348e2b704e31da0",
"assets/assets/sounds/test_name/line.wav": "a033b202d6607d37a177f078765424ca",
"assets/assets/sounds/test_name/repeat.wav": "870e43ec6f808a470e30bc2c5808c881",
"assets/assets/sounds/test_name/story.wav": "9d72fde939883b91ae7ecbd2447c715f",
"assets/assets/sounds/test_name/stroop.wav": "1303211c115508adfff202338851688f",
"assets/assets/story.png": "ad58d8cca98c4c4661c1f1fcb925cc53",
"assets/assets/story_sample.mp4": "e963149952de849266e0d581acea87a4",
"assets/assets/story_sample.png": "900492f84d9f9cc08ea4c5f3b53788a8",
"assets/assets/stroop.png": "3b8f278fa5d07d6bef5deca65b216f1c",
"assets/assets/voca_rp.png": "3288d62aad0f3e50e68967273c2764f6",
"assets/assets/what_is_my_dream_color.png": "2ab9317cdc2b34074e7d0804407f86fc",
"assets/assets/xcomment.png": "2485d815a966407cebb6359167e3a2f9",
"assets/FontManifest.json": "737d6c688a047f0ae33218fe5623a4dd",
"assets/fonts/MaterialIcons-Regular.otf": "f22d48633594d498ade39dbea9da6859",
"assets/NOTICES": "8fb6f3d0ce1443aab2bfd71eaef8db54",
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
"index.html": "cb89c483f152155f03a3f3e39da11355",
"/": "cb89c483f152155f03a3f3e39da11355",
"main.dart.js": "85cfb8f8102d5ee5794443df97ac2021",
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
