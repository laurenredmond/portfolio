"use strict";var precacheConfig=[["/portfolio/index.html","b58c72dc6b68f5c622366d4ec25a0beb"],["/portfolio/static/css/main.bfbd8a53.css","7613dedba2330125701f13f0c2f66a7a"],["/portfolio/static/js/main.5be35339.js","d7fa177c2949b83e1f6207198973573f"],["/portfolio/static/media/coffee-code-bg.1b51b2d0.png","1b51b2d0a9166d19ec03251d55f10d96"],["/portfolio/static/media/coffee-design-bg.64e5c1ad.png","64e5c1ada02c0f10b20e0e4b4d4221ab"],["/portfolio/static/media/coffee-photograph-bg.4a3b05ab.png","4a3b05ab561bd2dbf9ac59fe9a409933"],["/portfolio/static/media/coffee.784a350e.png","784a350e63261c461c3b0b6a84ab044a"],["/portfolio/static/media/contact-img-sm.446c2f2d.jpg","446c2f2df290e25aea626003bbde3db3"],["/portfolio/static/media/contact-img.1d8d9573.jpg","1d8d9573a9ff919d1db62349e01e940f"],["/portfolio/static/media/guitar-sm.c9813420.jpg","c9813420b476936caf10f042421d3770"],["/portfolio/static/media/guitar.747d30d9.jpg","747d30d9f66c1422767ed93cd2a03928"],["/portfolio/static/media/pandp-logo-glitch.ed46db81.gif","ed46db81149f99801f24a575d6d1a81a"],["/portfolio/static/media/portfolio-logo-glitch.dc970c88.gif","dc970c88a7acae210b50617c45d497a6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});