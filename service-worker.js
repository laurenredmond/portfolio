"use strict";var precacheConfig=[["/index.html","668ed3946539edb50c5bf1a141c4d3d0"],["/static/css/main.3d1b074a.css","e103081488e0602258c6d8f1d0af914d"],["/static/js/main.ad686637.js","ee0da0e9e48ac465454e91dcaff5c9b1"],["/static/media/coffee-code-bg.1b51b2d0.png","1b51b2d0a9166d19ec03251d55f10d96"],["/static/media/coffee-design-bg.64e5c1ad.png","64e5c1ada02c0f10b20e0e4b4d4221ab"],["/static/media/coffee-photograph-bg.4a3b05ab.png","4a3b05ab561bd2dbf9ac59fe9a409933"],["/static/media/coffee-sm.745db8d1.png","745db8d1d9a4adeb21fddf75aa1c459b"],["/static/media/coffee.784a350e.png","784a350e63261c461c3b0b6a84ab044a"],["/static/media/contact-img-sm.446c2f2d.jpg","446c2f2df290e25aea626003bbde3db3"],["/static/media/contact-img.1d8d9573.jpg","1d8d9573a9ff919d1db62349e01e940f"],["/static/media/guitar-sm.c9813420.jpg","c9813420b476936caf10f042421d3770"],["/static/media/guitar.747d30d9.jpg","747d30d9f66c1422767ed93cd2a03928"],["/static/media/nb1-997-painting-glitch.38119139.gif","381191393502b6e1546606af38325ed1"],["/static/media/pandp-logo-glitch.ed46db81.gif","ed46db81149f99801f24a575d6d1a81a"],["/static/media/portfolio-logo-glitch.dc970c88.gif","dc970c88a7acae210b50617c45d497a6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});