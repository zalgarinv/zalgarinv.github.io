'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4d3cefd0d974342575eca93fda0a4651",
".git/config": "5e4558d6d8f3109b9a477a60e8c88540",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "51e7412172e5e4ab652024a550e0ad3e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ee3ee284061f0bd12d43211282ed9fe",
".git/logs/refs/heads/master": "6ee3ee284061f0bd12d43211282ed9fe",
".git/logs/refs/remotes/origin/master": "f2a5fc915b8016196dc261d8ce887f85",
".git/objects/04/010f32ca6f7e9550e454a39a58b084aa3e4ff8": "0817d0dcfb1eaab55c9087f25154d1a1",
".git/objects/04/a7e9a8d40c950ca1a3ff20bf99c3640d3f3444": "20fcade9b0057aa5008bf4ab0ec7baa2",
".git/objects/09/a17142fd0b000be5686c23403dc7e5a988b59a": "f17adc044c0b86dc7e8ec7de42eca088",
".git/objects/10/9738134be1968c7904ea6a7755cee9fb316004": "a9eadb7148c21b3e82a3ce5df2c416e9",
".git/objects/10/b063674a24b9da4fac14583eae8b146b1bd58a": "fc404a17a93bb2ecc8cfd81e57f3ce93",
".git/objects/1a/4e799fd000cb1a52f8d42fe4d90bb401f564a7": "8ec0db6fffd9389205ef392b202b430a",
".git/objects/1d/6ae2a0746b53e4959928593b2a8c1c1e837e1d": "171e62d2c39979a003b8d37811412007",
".git/objects/20/1f14efd0c6bc9090bfde051ad01f4899350ff4": "85e6b2d82fb312196fd47f7b96382ac6",
".git/objects/20/96a40d3eafa5323eda954b16aec600655fa4f7": "b0f358397e35afc3441b0916c07b8308",
".git/objects/28/2c7db129a0c4f2bba7717bdc03995da7733e2c": "1329ce1ad25d2f356403ce7099029025",
".git/objects/2b/e0121a5f023dbdffae4fa523d483518da31842": "602e9c5405c8bfb83029664a9f4940c9",
".git/objects/52/4e16809e8c213bf4ea1c397ae601ef20606101": "fe18b67770c81c2cff1709402a005bea",
".git/objects/53/5b476dc98d85141ea0075d4db87568a0eab3cd": "f7ee53206966f8460bb45de32b23075a",
".git/objects/59/982854d818ad594423ba8545b7a09d0b4e68d3": "0538e86fc2ff4e513cb0b35e7c8ab232",
".git/objects/5e/c36ba531ac52e88d0a3563ee0225fd238d125e": "c1feaf475315b6f71856b09c68dad02e",
".git/objects/71/c88aef022d83b1d094f6991a07c5cff5201617": "029697113037c96559c8586e255a25ff",
".git/objects/80/18a5c634b35bc318d5b57ebe8a2da8076619ed": "ff275e6eec2f8f2a47513302e017d498",
".git/objects/88/903cdb69e6df5fc7295066d4b11bc8b9df7dff": "3d757393ff1d60eb1f6316a26ac2776e",
".git/objects/89/fd054cfb7985c5a751cde8211d606b7d93be4d": "9d4b47919a18640a44ddd346168eb1be",
".git/objects/8e/85e42f10684106738de7cc29c1ef443174bf4d": "b13856914f033494165fae679b8692f8",
".git/objects/8f/b1e80fa3ae88c7fa2139da9f657e4dcf955576": "453a2169433502356a8a5d6b0930bea7",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/99/9b3ea427a48a4321d9ccdbb7ac48d34ecd3c58": "6c284952ce18dde1fa96f571ff67668b",
".git/objects/9c/38a14d67b1e25d564931db16e8598f10c5a737": "95d350534ff57ac672b9cd55a7042592",
".git/objects/9c/8d7c5e5dc441c43cf0bcd52c2e2f55177f7d33": "aaa42da8557a32b64c44c83aadc72c70",
".git/objects/a1/c0ec043ca2efe7eb585d5c3cd1746e909ce189": "0fd0bfca9e9a18b0d5caa0f3ec3661a4",
".git/objects/a8/743ae3a1d5c669430c260ed9dba5b2804f9e1d": "192c5857fbb02a5c1db0e133bc54c4fd",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/ba/aad210b3ee7e4c23d8ccb8119155e1f6e01b54": "10a6ae5066e4b3218e9548a3cfa4af76",
".git/objects/bf/b7239061054afdef57bcd6feba81ac60446052": "30cf67b9439ec9906cb70ea846a1e32f",
".git/objects/c4/79b87cf6612526a6eb2d2f27a12d757652cf3f": "5772e610d93e08f54220ddf54e6b2cf0",
".git/objects/cd/5add5806a0bc88a02e8bd7259a6635b76c3d92": "815865d2be8787b478c7e01452be5780",
".git/objects/d9/e4d8978ef3e4c3a2e9e44d20c5db60c22c6d37": "3b4b9d99a270afceb28ae9190c3ce19c",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/ff/7a4053d1926397bd9e73702c74ba244b1d412a": "66dad57c9dbe72b8c1463881d941d425",
".git/refs/heads/master": "ec62cc6aee5e828b1f7461feee5195f5",
".git/refs/remotes/origin/master": "ec62cc6aee5e828b1f7461feee5195f5",
"assets/1.jpg": "f9150ac4d9b0e9534efb9dd2d4461cee",
"assets/2.jpg": "6fef4e64f525f9040ea321d3a465f3aa",
"assets/3.jpg": "1967e8918a3a479293e1107642e8314f",
"assets/5.jpg": "220f9ee69bffcd721e20cee2d1d36201",
"assets/6.jpg": "c1337b2c24a66dd2442779acf8bd4047",
"assets/about-me.jpg": "4c9acc394a38274f006515f1dbf61030",
"assets/academic_me.jpg": "a6dc29374782a6e217945d3d3e98c204",
"assets/AssetManifest.json": "d4a0899b8f86c9512fb47dd8857e750f",
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
"assets/web%255Cassets%255Cacademic_me.jpg": "a6dc29374782a6e217945d3d3e98c204",
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
"main.dart.js": "af1a48964381eb63083a44b729b4a998",
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
