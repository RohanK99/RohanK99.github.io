"use strict";var precacheConfig=[["/index.html","647092fc814e848a99e04aca94eb366f"],["/static/css/main.c82ea6f5.css","3bc358acbb2fec65c875ad2dc0c1daef"],["/static/js/main.776fe7bb.js","2121cfe0737f20b16dc3d41ad9633d54"],["/static/media/Back-Button.55376e34.svg","55376e3425bc7ff781624cd330d33045"],["/static/media/Canarie-App.8750b0a9.svg","8750b0a9e6debdc1c8c6f05e47436fdd"],["/static/media/Canarie-Bold.defde9d9.svg","defde9d928a7de1913b9a7670f6f0f43"],["/static/media/Critical-Mass-App.68e4cbb1.svg","68e4cbb124dd24f61a6a2f91bf687e86"],["/static/media/Critical-Mass-Bold.6cb3e1e1.svg","6cb3e1e1501f7361d70092e983b5a9d1"],["/static/media/Fitbit-App.116e6614.svg","116e66147987e62f32a129cf951aad2a"],["/static/media/Fitbit-Bold.1679ddbf.svg","1679ddbf2568927e81aa57a84a19053c"],["/static/media/Hack-Western-App.ddfe69b0.svg","ddfe69b0b63b329e247b338b5a9da11b"],["/static/media/Hack-Western-Bold.7b2099c0.svg","7b2099c03a0fed019e5834da3cafbe66"],["/static/media/Hack-the-North-App.d32cb42a.svg","d32cb42ac4da1a5f0921556e8a554845"],["/static/media/Hack-the-North-Bold.6df65a65.svg","6df65a650b8117c9f1d72a29540565a6"],["/static/media/Wato-App.8ce6b530.svg","8ce6b5301c45f96313e2967c27540e1f"],["/static/media/Wato-Bold.4642baae.svg","4642baae9bdfe548a4246e21aca88689"],["/static/media/resume-bold.13ad79d8.pdf","13ad79d822e17f05d12699201b4e79e6"],["/static/media/stratum.09bccbfc.ttf","09bccbfcb6b8a6425e90786b7bac436c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});