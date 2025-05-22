/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/09/26/hello-world/index.html","13c04f4a8180c1d89cc56cb6f2fffc4b"],["2020/11/20/python/index.html","62d1ab96bd9d9c5d33ef39adee6149d8"],["2020/12/04/photo/index.html","8f5712310dc0bce58f2395f2ec7fa5a1"],["2020/12/04/分享一个高清壁纸的网站/index.html","c54cf81b68a099b83d1c6ae4d84b7241"],["2020/12/15/javamail/index.html","a60770c25c5ea88795de4704f43c139f"],["2020/12/26/markdown/index.html","7f2ce1d7d061dc74ca155c0027829417"],["2021/01/01/Neo4j/index.html","df493afa1a609fc2b0bbb4f51278ac62"],["2021/01/06/spider/index.html","89b03edb9bd937b8d5089ac4a50e35a0"],["2021/01/11/Fiddler/index.html","99e4dbcad91e98a7284b24b25392dea6"],["2021/01/16/vim/index.html","a8b28dac3aa0431b975825c412ccb418"],["2021/01/21/cpolar/index.html","90583057f395536ec93b0a6e0c7bd2c4"],["2021/01/26/Files/index.html","46730871814017fca61820f90cba86ba"],["2021/01/31/Hexo/index.html","88cf08d8134c0c57d6267ff8d7421e23"],["2021/02/06/Pytorch/index.html","d40fcb8767128548df88c3c49d1a9409"],["2021/02/11/OneIndex/index.html","af0a13af9d7c50a4cc9ab4ed524fc2e9"],["2021/02/16/Nginx/index.html","13f3f29bba58f842d0164652ee50d07a"],["2021/02/21/user/index.html","82a5e62f590010c8abd314de87dcb5d8"],["2021/02/26/speed/index.html","f804de4c34d3a79a1b49905562ab2907"],["2021/03/01/command/index.html","92b8f5c019dd7bacb271f1f689c40ef0"],["2021/03/06/Jquery/index.html","cef60061543f2f8c24833bf0c7e0f1ad"],["404.html","430b211b0a18295011964d00826a62c2"],["about/index.html","39d33f825f64f6c568a6d08b29cef092"],["archives/2020/09/index.html","84d9b058158ba36096ee43138ca7bbd7"],["archives/2020/11/index.html","ac376028f74b6f1b6a5c78d064b4689d"],["archives/2020/12/index.html","a5f22ae548d02fc74181f967be0126d8"],["archives/2020/index.html","537c345f1a0c2bbf5266d0b18e24af94"],["archives/2021/01/index.html","6f6c10b4d1c332093ed4f68863998348"],["archives/2021/02/index.html","6a4b65da02e28d1c549f078b4f69f0aa"],["archives/2021/03/index.html","e21439aa1b1134a4fffc9763282cf308"],["archives/2021/index.html","9763e22402b61e2fefd3a4c6681f78df"],["archives/2021/page/2/index.html","d37cbbe553c64dbe53d336f8464bcba7"],["archives/index.html","28e55194c038b9cd4d970dc5453828bf"],["archives/page/2/index.html","7eceea216e08c2702d831995e71ca3e6"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["categories/Hexo/index.html","61bd16b47e797ac66d9c2f69b7b49372"],["categories/Java/index.html","7d050481473ce9f7c3f3c394d7dccd7c"],["categories/Linux/index.html","2b873cf0787963b08c93fb7544abc8e3"],["categories/Markdown/index.html","c65629cd17d143f622c07e7ea0516ca9"],["categories/Nginx/index.html","36521f1f8f60517d387d7509d1f9f4ad"],["categories/OneDrive/index.html","fa1372d8f2eaa650c1ea7ad0eada4450"],["categories/Python/index.html","88b3c7f773d25bf70ade8efc2a022922"],["categories/Pytorch/index.html","c6253f25b15e3ec76e968fc089535750"],["categories/Video/index.html","9743c0500dccc248c1fb6d088c39c278"],["categories/index.html","28fc8a708196f5c377a40118d291c9b3"],["categories/jQuery/index.html","1eb53ede375cdec4268b41d54dc7dbef"],["categories/内网穿透/index.html","3c29fc8ee7d560fa247cadd2d9acc28e"],["categories/壁纸/index.html","b246934689be6bee709cbdc52c15a007"],["categories/抓包/index.html","253ed996dab449154bf5ecea1994de55"],["categories/数据库/index.html","dfe909c64b49efce0d2fb15838e3101f"],["categories/管理器/index.html","c707141a69c56135a59526d62222e3d1"],["css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["css/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["css/index.css","64e2bcb7a43a1cf036c5b611d9f59f8d"],["css/style.css","5c470460c3777a634bb2b0dd57553491"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["fancybox/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["fancybox/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["img/14.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/20210129111612.png","f5d198110b7f147659899613d2bc0603"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["img/cover10.jpg","8032f5e501dcdcac7b501574fc0934e3"],["img/cover7.jpg","4635c71baf5359827f965b985d02be42"],["img/cover9.jpg","29c861c9046f7b49fb894d8d15c6623f"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/favicon1.png","970a521505556dc94d142e40fd8ceb38"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4109a3d8f971527578fac28094523f38"],["js/jquery-3.4.1.min.js","220afd743d9e9643852e31a135a9f3ae"],["js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["js/script.js","899039a2fd4a5c7a164d7ae5bfc78073"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["movies/index.html","aee9c02f80c2cf71955044db93c51fde"],["music/index.html","98d3d9839597927204d4515514bfeccc"],["page/2/index.html","d8172c2a57bc9f1f770d3d5521bacb5e"],["tags/index.html","00e85493a83e7f2ed58d2cdb70bb9d60"],["tags/smtp/index.html","e43accd6af5c23edf84eb7b850ff953d"],["tags/分享/index.html","b0a7493699df2bfce56b7a3c4c524a5a"],["tags/分享/page/2/index.html","13ded21182a38abe19f25e338c2119ec"],["tags/安装/index.html","cabc6dcda4935a7a01478fea173f3224"],["tags/插件/index.html","0e85c99d76573da7aa32561ffe15412f"],["tags/爬虫/index.html","ce7dd21c7522ded8bddad6010404b80f"],["talk/index.html","68052a2bd8f8f80277726af9047e3f2a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







