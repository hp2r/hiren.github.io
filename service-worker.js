"use strict";var precacheConfig=[["/index.html","8d7c04a653df571a1f79d6cec3794ad3"],["/static/css/main.32725d2e.css","59ab06579aafb41ee81b021f1d071163"],["/static/js/main.74b3db8d.js","da72d714db0613f19ed014c6f3cad107"],["/static/media/5_lamps_logo.3d88932b.png","3d88932b44f70671a788e9cca46ffffe"],["/static/media/IOS_logo.fa3ca475.png","fa3ca475511c815990bc71a8bc1b4553"],["/static/media/Montserrat-Regular.91696e09.otf","91696e0984cfab74ff344325e5015da5"],["/static/media/Roboto-Bold.c0f1e4a4.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["/static/media/Roboto-Bold.eed9aab5.woff","eed9aab5449cc9c8430d7d258108f602"],["/static/media/Roboto-Light.3c37aa69.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["/static/media/Roboto-Light.ea36cd9a.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["/static/media/Roboto-Medium.1561b424.woff2","1561b424aaef2f704bbd89155b3ce514"],["/static/media/Roboto-Medium.cf4d60bc.woff","cf4d60bc0b1d4b2314085919a00e1724"],["/static/media/Roboto-Regular.3cf6adf6.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["/static/media/Roboto-Regular.5136cbe6.woff2","5136cbe62a63604402f2fedb97f246f8"],["/static/media/Roboto-Thin.1f35e6a1.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["/static/media/Roboto-Thin.44b78f14.woff","44b78f142603eb69f593ed4002ed7a4a"],["/static/media/agile_git_mamp.690786c9.png","690786c9da0ac75eb91ab5bad04a406d"],["/static/media/android.3ec99101.png","3ec99101c3d875d6070a4c8290752dfc"],["/static/media/aston_logo.c741364f.png","c741364f80202941563da452a22e43fa"],["/static/media/blackjack_desktop.edbf983e.JPG","edbf983e745e33d91918c7a490cf7c52"],["/static/media/blackjack_mobile.ed1a1a87.JPG","ed1a1a87522dff6e47e4d3dbceb81364"],["/static/media/creative.9f22e533.png","9f22e533a3a020fe569b9aa9f8529028"],["/static/media/css_logo.670c0bec.png","670c0bec96ca809688b07d72b8335b15"],["/static/media/database.3b5c5ad3.png","3b5c5ad3ac02b6376a20cce965b3b9d8"],["/static/media/extreme-live-gaming.7c671218.png","7c6712188b2b4f9684237aff87dd0d28"],["/static/media/gamesys.e76da10c.jpg","e76da10c279d5675dbcb7dadd329d037"],["/static/media/github.56aa79c1.png","56aa79c13096e30dc2f09a7d0118c2b2"],["/static/media/html_logo.fc4b15b5.png","fc4b15b53ceeed7a3b9361840d02d316"],["/static/media/ivt_ipad.c7b58365.JPG","c7b58365e4cc43c8115fa176d89251b2"],["/static/media/javascript_logo.c4cea1c3.png","c4cea1c3f81ffc3ea8df7bda146b5462"],["/static/media/jpj_poker_lobby.6ac41c0e.jpg","6ac41c0ea17b0e0ad01e60745a0011e3"],["/static/media/jquery_ajax2.954678da.png","954678dae94ac5ddd21a1d00cc5315e0"],["/static/media/linkedin.f6eaf68b.jpg","f6eaf68b925e626e37d1815b383e8a1d"],["/static/media/node_php.9fec8901.png","9fec8901286eb4503ce7556532e9f567"],["/static/media/oop.6c1b20cd.png","6c1b20cd844fe2e30bbd4e54ace1cf53"],["/static/media/poker-game.13e26ca8.jpg","13e26ca8e80d9354616f4749b0feede9"],["/static/media/ps_ai.567a4e0a.png","567a4e0a223832d2823961fa42023846"],["/static/media/react-logo.9978c2e2.png","9978c2e272cc80f71ac7fb4b8010c7cc"],["/static/media/redux.26d55a43.png","26d55a4397630dcdafa50e16e93f9e0a"],["/static/media/responsive-design.e759a1e3.png","e759a1e372e83660b25b2a4ad2b89d05"],["/static/media/roulette_desktop.5a2e2637.JPG","5a2e2637995a647814d08ec7ee1b9fd2"],["/static/media/splash.3070e1c9.jpg","3070e1c9081374e50dacf8639377c3ff"],["/static/media/unity_ivt.3ea775dd.JPG","3ea775dd31f240c8bfc0aa0045391d2a"],["/static/media/vs_code_npm_postman.e1c1d7fe.png","e1c1d7fe84f580e3e87f84bf13b70771"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});