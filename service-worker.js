/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f53969cd8e8722ea736d59c02ac2748f"
  },
  {
    "url": "about/index.html",
    "revision": "dab01963343f6d4eb8539d49bac61b86"
  },
  {
    "url": "assets/css/0.styles.43bcf2b6.css",
    "revision": "0e0eaeb26366ed053bca659a97b77c8d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.ee1b0ab3.js",
    "revision": "56b18742797a118a76279a533b5510e5"
  },
  {
    "url": "assets/js/10.7a7a5f84.js",
    "revision": "d386b490d0edf6996f9ec002721636ff"
  },
  {
    "url": "assets/js/11.166c414a.js",
    "revision": "b63ee1c74fcdbddcbdfa1938981b5b4a"
  },
  {
    "url": "assets/js/12.269b8dd0.js",
    "revision": "95553a1453cc25eca7396bb43333d106"
  },
  {
    "url": "assets/js/13.c521aade.js",
    "revision": "2a85de8fc02bd04abf7df79ee8c2013b"
  },
  {
    "url": "assets/js/14.5c7b6584.js",
    "revision": "2d600ac6f43b54fca5079452a2340d21"
  },
  {
    "url": "assets/js/15.2d5de804.js",
    "revision": "1d43c2b87528bde3786de3b40bb07499"
  },
  {
    "url": "assets/js/16.11d45d34.js",
    "revision": "8f858e55d56e77618cda2282eb0436ef"
  },
  {
    "url": "assets/js/17.44134d88.js",
    "revision": "63fe3844fda4ff69c75e94d28dcdedae"
  },
  {
    "url": "assets/js/18.c85fa839.js",
    "revision": "f12ca7667124beffe5b1853410881283"
  },
  {
    "url": "assets/js/19.26b81a33.js",
    "revision": "552a4f4a2c346ec80c19807d7c21c05b"
  },
  {
    "url": "assets/js/2.d1d77410.js",
    "revision": "b772c24ce61fd2a19ee1982e6f63424e"
  },
  {
    "url": "assets/js/20.6e5874c6.js",
    "revision": "969da065ce5b765a6ec6bae0c211f1ae"
  },
  {
    "url": "assets/js/21.49784bf4.js",
    "revision": "e3f9fbfa1eb6a71e9d1a1545c7828ad3"
  },
  {
    "url": "assets/js/22.dfdae065.js",
    "revision": "4043f9535dac045d1d2e7f17bf55b287"
  },
  {
    "url": "assets/js/23.e06ad87d.js",
    "revision": "7593f15534f2af7276fdbec6a5e841d7"
  },
  {
    "url": "assets/js/24.894754b6.js",
    "revision": "1073ba488503b296c4b373b8c3ce80a1"
  },
  {
    "url": "assets/js/25.8e9e23f5.js",
    "revision": "2ba1cf9f11452e530a27c25654898a64"
  },
  {
    "url": "assets/js/26.86f4c7ce.js",
    "revision": "5f91e736ed4aa6fa0ed5f0f808c976d3"
  },
  {
    "url": "assets/js/27.1b172f94.js",
    "revision": "72e30a3bd752b6a94a229aba735ea732"
  },
  {
    "url": "assets/js/28.3cd33779.js",
    "revision": "9f1140447a955a340e15783692579d2b"
  },
  {
    "url": "assets/js/4.99b6cd5a.js",
    "revision": "baa469088d5b2a296eb6fbf4b81db83a"
  },
  {
    "url": "assets/js/5.6da5e9db.js",
    "revision": "494818fd39e89ffee1fde951a092036c"
  },
  {
    "url": "assets/js/6.23e04e70.js",
    "revision": "56f842fdbe2f5c94aa08c7afde3080ff"
  },
  {
    "url": "assets/js/7.71ee4c24.js",
    "revision": "bcb58cbbf89c82803f1b2ca153b04ed8"
  },
  {
    "url": "assets/js/8.0fdfba80.js",
    "revision": "74a215050377f5b1c8468de31f9373dd"
  },
  {
    "url": "assets/js/9.dd99295e.js",
    "revision": "ac98a3961fc2fa43f53e057021c43251"
  },
  {
    "url": "assets/js/app.51f7e422.js",
    "revision": "72795f00eaee865ba78b9bbb12686913"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "b09c81ccaca053429503dc74aafbe669"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "c85c3fb37143a5bc9d2fa13272f5c99c"
  },
  {
    "url": "categories/index.html",
    "revision": "fa691bcc42580e7b4b6ebdc7e815b2c9"
  },
  {
    "url": "categories/tool/index.html",
    "revision": "b1b1a592681a352712d8ebe26b8ea38a"
  },
  {
    "url": "documentation/Chrome.html",
    "revision": "e38ab60cd0ce0438227ca5d16eb4a7f0"
  },
  {
    "url": "documentation/css/Class.html",
    "revision": "9d1494e10f32cad46e03c0b2c38a1617"
  },
  {
    "url": "documentation/index.html",
    "revision": "7c03af004f393388b3b70f489056f856"
  },
  {
    "url": "documentation/js/BinaryTree.html",
    "revision": "20c8673ada1165d219b8fa4cfc638530"
  },
  {
    "url": "documentation/VsCode.html",
    "revision": "a06682a4ba894fd4e7447a0ea6e1da8e"
  },
  {
    "url": "documentation/vue/Axios.html",
    "revision": "6686c0b599ba08d3052ef41b5544667b"
  },
  {
    "url": "fonts/iconfont.css",
    "revision": "b559251c20326c127643d1552b387dc4"
  },
  {
    "url": "fonts/iconfont.ttf",
    "revision": "e92e98b64c1db0396241a2435f5075c0"
  },
  {
    "url": "fonts/iconfont.woff",
    "revision": "17d5e47d559e5340031a5f35e6df8f42"
  },
  {
    "url": "fonts/iconfont.woff2",
    "revision": "bf27cdeb24cb0d5b3de43d2058dca28a"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "93a09c40f17d1a7930b7310f5df9b827"
  },
  {
    "url": "icons/icon.jpg",
    "revision": "2219e1dae991c6ae3daf000a5b963521"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "057b71bdac4d5f5536b26f28822d4212"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "72d0be2b5776f1e516b3e0aaaddf98cb"
  },
  {
    "url": "images/banner.jpg",
    "revision": "4a5117a6202660c1d7c12b6407bb03a7"
  },
  {
    "url": "images/heart.png",
    "revision": "a7c66c9d90ae2e49ac4702ae4768b488"
  },
  {
    "url": "images/life-bg-black.svg",
    "revision": "0fc5365dcd6f8c7ef69674f669531693"
  },
  {
    "url": "images/life-bg.svg",
    "revision": "31aea8744065c641f428d6f3bb29e51d"
  },
  {
    "url": "images/life.gif",
    "revision": "ce96c718432fbc31c5f4fa951b7aa1e7"
  },
  {
    "url": "images/logo.png",
    "revision": "f924dac2d17bdefd777773f28715b629"
  },
  {
    "url": "images/love-girl1.jpg",
    "revision": "add4f9749c3b5e9c088d5cd302813f40"
  },
  {
    "url": "images/love-girl2.jpg",
    "revision": "23f429938009c69397797357f5a35559"
  },
  {
    "url": "images/love-man1.jpg",
    "revision": "aeda3fb4d2d633a9f0ed4d9808fd5968"
  },
  {
    "url": "images/love-man2.jpg",
    "revision": "945f16f680361ac2e2590779c5a4bc68"
  },
  {
    "url": "images/tool.gif",
    "revision": "fde88d9e792cec7e5640c5773b07eb0a"
  },
  {
    "url": "images/user.jpg",
    "revision": "2219e1dae991c6ae3daf000a5b963521"
  },
  {
    "url": "index.html",
    "revision": "0646827f87ec18729002499cf5a16766"
  },
  {
    "url": "life/index.html",
    "revision": "3dcebd74c8c03b5397ea9e7f97e9fa14"
  },
  {
    "url": "life/journal/2022.html",
    "revision": "2f5c862f3c689ea368616f647d842a3a"
  },
  {
    "url": "life/plan/2022.html",
    "revision": "b144054399d80f948c768d33350e18dd"
  },
  {
    "url": "pages/blog/22050401.html",
    "revision": "00751284a411b72c6d41c9f310e04473"
  },
  {
    "url": "pages/frontEnd/22050401.html",
    "revision": "be8de7efd9cbd45e9933bf838d0d0b16"
  },
  {
    "url": "pages/tool/22050701.html",
    "revision": "7d0036a611fb79d2cdcaa1c86e3eb440"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "21afccaecbd0d21c769280c0d6c713fd"
  },
  {
    "url": "tag/index.html",
    "revision": "865da7a74eb0c5c18d6695f317d4e2d7"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2f6c62ba7fbb01c53c0dc47ca72df254"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5e04e3e91fc91a0bdc1cd20190709519"
  },
  {
    "url": "timeline/index.html",
    "revision": "fbaaf21d4548913924a5f3ab9bac3099"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
