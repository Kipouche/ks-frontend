if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,s,n)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return a;case"module":return i;default:return e(c)}})).then(e=>{const c=n(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/b666a2ce.de6c3da4d5d4e44fff87.js",revision:"bdda12c273defb577a35a7a900fafa1f"},{url:"/_next/static/chunks/e47c8756aec3c107aa5ef52c46abd88b1b8b389b.913f29da44b97371b7a9.js",revision:"b2d3ed933bdd99cfa108a09c88ef6a29"},{url:"/_next/static/chunks/framework.de5b927bb3a122da5a2a.js",revision:"59bb0a3271ddef6462ff12a22cebcf20"},{url:"/_next/static/chunks/main-0c7aa43a671704811c96.js",revision:"5cbcc638f0ecbbd340352c2442096d20"},{url:"/_next/static/chunks/pages/_app-12bc910788b3282628a8.js",revision:"0d72851cf0fece6998a5a89264ea0aa5"},{url:"/_next/static/chunks/pages/_error-f45a89de560d870302bd.js",revision:"c08a2dc86b70ec3f5efd2c196476d293"},{url:"/_next/static/chunks/pages/dashboard-b1e20ee15a16f9e26fcd.js",revision:"9e0609ff8f437890be35b2dca130df98"},{url:"/_next/static/chunks/pages/index-35da56a7a51282989788.js",revision:"14a43bbdd162b7f37c62d6fb3092d07c"},{url:"/_next/static/chunks/pages/login-a05ca4871c34dcbebf13.js",revision:"77a6e6fe49b21b49e5fbf6fe658c5674"},{url:"/_next/static/chunks/pages/profile/%5BprofileId%5D-ed02771fbc620393582e.js",revision:"fee9121692cc4657673b3e953b65b9c8"},{url:"/_next/static/chunks/pages/register-4915c97c6c4161a7eecc.js",revision:"66cfbe90e0be2ab39513338bc045290b"},{url:"/_next/static/chunks/polyfills-ddcc847e43635f820aed.js",revision:"b4c7585fe342c46c1b20c4c3d133d92c"},{url:"/_next/static/chunks/styles.72d3fd0916955385a8ab.js",revision:"083e1855cb16d678af6061deba304e32"},{url:"/_next/static/chunks/webpack-3866a5765bde9782de2a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/b666a2ce.ecbd3d3a.chunk.css",revision:"fb54dfa2c77bda7a0290fd73b2163d01"},{url:"/_next/static/css/styles.0b69abe9.chunk.css",revision:"4cf1a00c3dcd96391f6a56da6352a3cd"},{url:"/_next/static/tEcQj83oPvur1JwNmrUDJ/_buildManifest.js",revision:"f908ae5d135f476bac642ccb9478c077"},{url:"/_next/static/tEcQj83oPvur1JwNmrUDJ/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/airbnb-logo.png",revision:"6b7194c957d821ba74c8838553c59e23"},{url:"/busy_worker.jpg",revision:"095331e26b029ec461a6bf383957c95d"},{url:"/busy_worker2.jpg",revision:"5172803573af8de745946c86cd97d4f4"},{url:"/busy_worker3.jpg",revision:"2683d20b80896e8764c78e5832e87719"},{url:"/busy_worker4.jpg",revision:"057a20ffdc2bf08986dfb49d303cc8cf"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/android-icon-192x192.png",revision:"e74b8bf6da489c8c923ff9c27d067287"},{url:"/icons/apple-icon-114x114png",revision:"cd305039ed0037ec2743d0aef03d45a0"},{url:"/icons/apple-icon-120x120.png",revision:"42d9380da62be8b601c8d9fdd4f35f16"},{url:"/icons/apple-icon-152x152.png",revision:"1c82258165979e1a2c6caf268217ecd5"},{url:"/icons/apple-icon-180x180.png",revision:"1a713ea7506e25cbdf727316745bb773"},{url:"/icons/apple-icon-57x57png",revision:"956075fd700c8e428e0d502522fbd00f"},{url:"/icons/apple-icon-60x60.png",revision:"6c55b92bcf4b6862f2358f2efd9583e0"},{url:"/icons/apple-icon-72x72.png",revision:"1a990aabf208b76a1e49b131e91c8c6a"},{url:"/icons/apple-icon-76x76.png",revision:"628d4c5406ac92257d849edc2f3de9a8"},{url:"/icons/favicon-144x144.png",revision:"e90d5d53356b2e73b6b4291921634eab"},{url:"/icons/favicon-16x16.png",revision:"c393ae52748bcda0959ad7057d6e56a5"},{url:"/icons/favicon-32x32.png",revision:"f1f1ce34cf9875cc48b2a5ee9e87c930"},{url:"/icons/favicon-96x96.png",revision:"19712c5a716104f2c50063272d657ffb"},{url:"/logo-square.png",revision:"4536ed135412da31a573e5675cd92667"},{url:"/logo.png",revision:"ecd6b792fb2ec2524ab041249712b888"},{url:"/man.png",revision:"e4e4ce15b75864b198eb220cdef02ab6"},{url:"/man_2.png",revision:"e26c9d75ec0a4a5399365f42182c56c3"},{url:"/manifest.json",revision:"3f5335f7b7c77159ff4104afca8991a7"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/woman.png",revision:"c78c03426e5dc1bf263e8b5797cc3cf0"},{url:"/woman_2.png",revision:"4065b624247b242eb031a38aba1a44aa"},{url:"/woman_2_cropped.png",revision:"a4f3cb5e3b01afad0f73a79afdc1e455"},{url:"/woman_cropped.png",revision:"89f5a136accc7b1388776007abe9e758"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
