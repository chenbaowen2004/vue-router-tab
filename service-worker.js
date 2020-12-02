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
    "revision": "4536407c035be216f0d3d668be81c2d9"
  },
  {
    "url": "api/index.html",
    "revision": "3c588f5866ec5ce2663529e3cce0a935"
  },
  {
    "url": "assets/css/0.styles.7da23101.css",
    "revision": "77f46df5da5dc78c560228dd1ee494b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df9263c0.js",
    "revision": "6f8947dc67f3e5752a37c43eb0c91ac7"
  },
  {
    "url": "assets/js/11.8001288f.js",
    "revision": "0d972e2e2a5d9f172c427a4d2d48d47e"
  },
  {
    "url": "assets/js/12.5b734ca1.js",
    "revision": "851b5d885f1fd215755a44dd6de92126"
  },
  {
    "url": "assets/js/13.6fa55e3e.js",
    "revision": "ba57d1d47d6558af4ac163a5b8bd7f17"
  },
  {
    "url": "assets/js/14.f7279b47.js",
    "revision": "d139bee28a8f42e4c800458476a27606"
  },
  {
    "url": "assets/js/15.9ba81aa8.js",
    "revision": "297b52064ca46caa48f71bb791544e8c"
  },
  {
    "url": "assets/js/16.70d9277e.js",
    "revision": "1bc681887a7a2826f35506d55fb761a4"
  },
  {
    "url": "assets/js/17.67acf2a3.js",
    "revision": "031654ac2b0099d6410d7842fc15702c"
  },
  {
    "url": "assets/js/18.f7d87bfe.js",
    "revision": "b1c09d9658fafac57b1e430b54a87d1a"
  },
  {
    "url": "assets/js/19.2afe8e14.js",
    "revision": "df181186369662765fcf6e075c46ec29"
  },
  {
    "url": "assets/js/20.c6dee36b.js",
    "revision": "40dd46fd9a9f865e641a82595cb2b5ba"
  },
  {
    "url": "assets/js/21.2a0770b8.js",
    "revision": "b41e6a36e7d575d50b45aeda109f9f7c"
  },
  {
    "url": "assets/js/22.b786b301.js",
    "revision": "4d6441c49d01b47f26d1b2fcb18c7586"
  },
  {
    "url": "assets/js/23.ae0c47e7.js",
    "revision": "48d9cb522cb4efa7dd3a02d291cf1e56"
  },
  {
    "url": "assets/js/24.2119cee2.js",
    "revision": "caaeb1d306e0cb31e0e69b178b8f0971"
  },
  {
    "url": "assets/js/25.aa96abeb.js",
    "revision": "40a6a133123f105e8f29f514a00adbc3"
  },
  {
    "url": "assets/js/26.9642420b.js",
    "revision": "12b66c9c7f1376b2c633b131ac7a27fe"
  },
  {
    "url": "assets/js/27.3d9a7dbc.js",
    "revision": "dc0c0f79d1dbee31e1e01d1381f900cc"
  },
  {
    "url": "assets/js/28.f72a5c68.js",
    "revision": "03e91dc25a658a8153d74360e53a0aa4"
  },
  {
    "url": "assets/js/29.ee917864.js",
    "revision": "81763e1398dfd691e728f06c6f7f7ad1"
  },
  {
    "url": "assets/js/3.a801d51d.js",
    "revision": "a4fdceba328a473423f9681c50e71808"
  },
  {
    "url": "assets/js/30.cf02d6c9.js",
    "revision": "211de496d680996f3dff9ac22ed3622b"
  },
  {
    "url": "assets/js/31.f2c1bdf0.js",
    "revision": "ebbd9502935361acafafa5eff2f52312"
  },
  {
    "url": "assets/js/32.3b7f2327.js",
    "revision": "f524a4aec1e18f22a9b684a7260210e5"
  },
  {
    "url": "assets/js/33.e2f79efa.js",
    "revision": "95667c0bf87bea6a71663187f7577e75"
  },
  {
    "url": "assets/js/34.ea8e062d.js",
    "revision": "4bc196247665b771111c2098e88f0666"
  },
  {
    "url": "assets/js/35.c36b3f99.js",
    "revision": "9f975d0690b77bea4a1011435c656927"
  },
  {
    "url": "assets/js/36.166b82ce.js",
    "revision": "8f491d5ec23409bbb29142f7461d0284"
  },
  {
    "url": "assets/js/37.2c125faf.js",
    "revision": "c236652d0bdf2717ca126750c48cbcfa"
  },
  {
    "url": "assets/js/38.0b8500b6.js",
    "revision": "c5374ff262a2d8b04a5f453168983992"
  },
  {
    "url": "assets/js/39.6aa4d698.js",
    "revision": "fc663dc9a97510a7fec09f5ab6a8c818"
  },
  {
    "url": "assets/js/4.2f187711.js",
    "revision": "bc6ced82bc7e71bc7b8dab9d1ab298cc"
  },
  {
    "url": "assets/js/40.73aa755d.js",
    "revision": "72483a4965ec947e9e09d64c71193bff"
  },
  {
    "url": "assets/js/41.bcb81e61.js",
    "revision": "2ef3c8036bf8e0a92a868feb806b10d2"
  },
  {
    "url": "assets/js/42.c5bf4a08.js",
    "revision": "29c5b4d9675e71513736c71d3c150b5a"
  },
  {
    "url": "assets/js/43.37bbb403.js",
    "revision": "90b56f5ff2ca367cc33f23d38e7d8ac6"
  },
  {
    "url": "assets/js/44.0185acf3.js",
    "revision": "886339a409c18156008653eba7759fe6"
  },
  {
    "url": "assets/js/45.3bf5cd92.js",
    "revision": "58cc327681eda9afbc95dadb207219a5"
  },
  {
    "url": "assets/js/46.dea639e3.js",
    "revision": "74e7a38d6b2564c4c100b7740cdbd118"
  },
  {
    "url": "assets/js/47.90ce832d.js",
    "revision": "c76acc5b6ff2b0a8bb7a5d7d21d52875"
  },
  {
    "url": "assets/js/48.d89d3b35.js",
    "revision": "44fe88b5fba538ef0ea54a9ad8d8ff35"
  },
  {
    "url": "assets/js/49.71241c43.js",
    "revision": "1441f63953583bf3f33cd0ac04ae63df"
  },
  {
    "url": "assets/js/5.113bf9b3.js",
    "revision": "ee1455590ebf29c08f77054b34ef279e"
  },
  {
    "url": "assets/js/50.ec9348ff.js",
    "revision": "f391a0d4a07ab906daab36dfe4d29d3b"
  },
  {
    "url": "assets/js/51.974145c4.js",
    "revision": "e64d167d308fd1798e394387718c6d53"
  },
  {
    "url": "assets/js/52.f2bb7e7d.js",
    "revision": "25be4f1d6b7d65dde56a977acaf19cb1"
  },
  {
    "url": "assets/js/53.420913fa.js",
    "revision": "f4b5e79757fba44fb554d88b90aa1d80"
  },
  {
    "url": "assets/js/54.78947bd8.js",
    "revision": "85c38a7a14fcb31f4247177d77de3359"
  },
  {
    "url": "assets/js/55.825edc88.js",
    "revision": "41ed153119e185b1881d0203f3b1fd7d"
  },
  {
    "url": "assets/js/56.03c92183.js",
    "revision": "fdbed007e9cb1acccfb012c5b960ed09"
  },
  {
    "url": "assets/js/57.a83ebeff.js",
    "revision": "667fecc536e74b098de94a493573f442"
  },
  {
    "url": "assets/js/6.de2f31b3.js",
    "revision": "bd48444ade67736e933b405cf826e0d8"
  },
  {
    "url": "assets/js/7.70699627.js",
    "revision": "ae5fb36931e887737518fcb833ff3ff0"
  },
  {
    "url": "assets/js/8.f2442fd7.js",
    "revision": "33a1cde5ca37f5bf404c43b9d3179857"
  },
  {
    "url": "assets/js/9.ace222c4.js",
    "revision": "d08aeb7a2adfb70652b9814535b0ab6b"
  },
  {
    "url": "assets/js/app.deafc065.js",
    "revision": "7da718833651c0e1be483c683dc96b00"
  },
  {
    "url": "assets/js/vendors~docsearch.b4d343ba.js",
    "revision": "f54217f9cfb4e385b761e78a1ac24bdb"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "d8c21ce60323c26027cf2ca1609d0e53"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "3051935f5a0e7a261b142a38a070c30d"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "7032f82bda2016390a3277878cb3bbd8"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "79e9db63c7a51aed4153098ca9b55652"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "c31d31d0e25c5c5e24ba66ab30b2825a"
  },
  {
    "url": "guide/changelog.html",
    "revision": "229bc78fd82faf4671e38a1f6a27cd34"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "f50abed77890633b474bab2b5dbab234"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "3d609f9c88a541e1a7369d7e4241910b"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "57d182537b61c8b05854303663c3b369"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "201d2dfb290418a8d04bcdd53dd6a54e"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "d7edac7e30434d9930d11371ba5643e1"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "54b3bd0e2a776026b8126f5be7d31643"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "bccbdab4af98ef50eff048ae8a7b43e5"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "d72255acb0b34752fc64b7d5a31d11a0"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "8cccecde99d6388974e47cfc585e1507"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "a0477e57036acdc749f3235311fed659"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "8d5e305f2f0e052f2dc0dc824a5dec99"
  },
  {
    "url": "guide/index.html",
    "revision": "d82fac54e4ff95c606e4b3303c7222c6"
  },
  {
    "url": "guide/meta/faqs.html",
    "revision": "905d0c82b41a44b988b01b7829134cb4"
  },
  {
    "url": "guide/meta/solutions.html",
    "revision": "161e008b337e092cc13848b6743bc333"
  },
  {
    "url": "guide/meta/uninstall.html",
    "revision": "87d7bf6e02910a1d7113fcfee19295fc"
  },
  {
    "url": "index.html",
    "revision": "1b9bf4d5b9a738753379d2b71612dcce"
  },
  {
    "url": "zh/api/index.html",
    "revision": "f464db9ee90e8941c042e00a3291d98e"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "a600079bfa0e6b7455836d44ca11e27d"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "2ab8d7d7b6e996fb42b89d7e74652658"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "dedae888e7d129c56af8dd55fc37f552"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "5e41928e584b97e2d3593e6cc5f92536"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "12f71cce30cd8ff52331d64600efec9c"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "4ac8dad8836b835595192a4952e82937"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "24e3edcf9d3b0ec4fbf7f03d30bb4e9a"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "a689bfcbe954c5f9604d79085b105afe"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "beda0b00df510eb6c118acca2e55efdb"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "8d0c3600d4accb08b512c1924b0e74d6"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "27bcd64a74b0d3aca670b22f29e60e96"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "df64ade34c93296a92fbe5a03b82fd26"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "f22e70bb3674b3c8cc81050fa43d8a13"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "36710c8bdf2a424503d50c6974489b3d"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "6115399366522b3feabebe0f8a321057"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "0d56bbdb5ff8051a94ba526bc1d44935"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "041570f9610213fdc3e50823bbcc4ee6"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7659c8ebbe6388c20d3977fb2f410203"
  },
  {
    "url": "zh/guide/meta/faqs.html",
    "revision": "84d9e62369a6ad110e389142a42c7661"
  },
  {
    "url": "zh/guide/meta/solutions.html",
    "revision": "3de76c7c2da611a389113ffa4d4f64ba"
  },
  {
    "url": "zh/guide/meta/uninstall.html",
    "revision": "3311ab85ca1e1017df1c947603b5d4a9"
  },
  {
    "url": "zh/index.html",
    "revision": "d7ecf58941d8f59913f847402855a481"
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
